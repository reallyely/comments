import { AuthorEntity } from "@/modules/Author/AuthorEntity";
import { Entity } from "@/modules/shared/core/Entity";

export interface CommentProps {
  content: string;
  author: AuthorEntity;
  created?: Date;
}

export class CommentEntity extends Entity<CommentProps> {
  public content: string;
  public author: AuthorEntity;
  public created: Date;
  private constructor(obj: CommentProps) {
    super(obj)
    this.content = obj.content;
    this.author = obj.author;
    this.created = obj.created || new Date()
  }
  public static create(obj: CommentProps) {
    return new CommentEntity(obj)
  }
  public static isValid(obj: any): boolean {
    return true
  }
  public static createEmpty() {
    return new CommentEntity({ content: "", author: AuthorEntity.createEmpty() });
  }
}

export interface CommentViewModel {
  content: string
  author: AuthorEntity
  created: Date
}

export interface CommentProps {
  content: string;
  author: AuthorEntity;
  created?: Date;
}
export class CommentView extends Entity<CommentProps>{
  content: string;
  author: AuthorEntity;
  created: Date;

  private constructor(obj: CommentProps) {
    super(obj)
    this.content = obj.content
    this.author = obj.author
    this.created = obj.created || new Date()
  }

  public static create(comment: CommentEntity, author: AuthorEntity): CommentView {
    if (CommentEntity.isValid(comment) && AuthorEntity.isValid(author)) {

      const final: CommentViewModel = {
        content: comment.content,
        author: author,
        created: comment.created
      }
      return new CommentView(final)
    }
    return CommentView.createEmpty()
  }
  public static createEmpty(): CommentView {
    return new CommentView({ content: "", author: AuthorEntity.createEmpty() })
  }
}