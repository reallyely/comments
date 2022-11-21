import { AuthorEntity } from "@/modules/Author/AuthorEntity";

interface CommentProps {
  content: string;
  author: AuthorEntity;
}
export class CommentEntity implements CommentProps {
  public content: string;
  public author: AuthorEntity;
  private constructor(obj: CommentProps) {
    this.content = obj.content;
    this.author = obj.author;
  }

  public static createEmpty() {
    return new CommentEntity({ content: "", author: AuthorEntity.createEmpty() });
  }
}
