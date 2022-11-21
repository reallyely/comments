import { CommentEntity } from "@/modules/Comment/CommentEntity"
import { AuthorEntity } from "@/modules/Author/AuthorEntity"
import { AggregateRoot } from "@/core/Aggregate";

interface PostProps {
  content: string;
  author: AuthorEntity
  comments: Array<CommentEntity>
  dateCreated?: Date
}

interface PostPropsFromView {
  content: string;
  author: AuthorEntity
}

export class PostEntity extends AggregateRoot<PostProps> {
  public content: string;
  public author: AuthorEntity
  public comments: Array<CommentEntity>
  public dateCreated: Date
  private constructor(obj: PostProps) {
    super(obj)
    this.content = obj.content
    this.author = obj.author
    this.comments = obj.comments
    this.dateCreated = new Date()
  }
  public static isValid(obj: any) {
    const mandatoryFields = ["content", "author"]
    return mandatoryFields.filter((key) => Object.keys(obj).includes(key)).length >= mandatoryFields.length
  }
  public static createFromJSON(json: string): PostEntity {
    const parsed = JSON.parse(json)
    if (PostEntity.isValid(parsed)) {
      const { content, author, comments } = parsed
      return new PostEntity({ content, author, comments });
    }
    return PostEntity.createEmpty()
  }
  public static fromForm(obj: PostPropsFromView): PostEntity {
    if (PostEntity.isValid(obj)) {
      return new PostEntity({ ...obj, comments: [CommentEntity.createEmpty()] })
    }
    return PostEntity.createEmpty()
  }
  public static createEmpty(): PostEntity {
    return new PostEntity({ content: "", author: AuthorEntity.createEmpty(), comments: [CommentEntity.createEmpty()] })
  }
  public static create(obj: PostProps): PostEntity {
    return new PostEntity(obj)
  }
}


