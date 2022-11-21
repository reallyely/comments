import { PostEntity } from "../Post/PostEntity";
import { Entity } from "@/modules/shared/core/Entity";
import { PortraitEntity } from "./PortraitEntity";

export interface AuthorProps {
  name: string;
  portrait: PortraitEntity;
}

export interface AuthorViewModel {
  name: string
  portraitSource: string
  postCreated: Date
}
export class AuthorView {
  name: string;
  portraitSource: string;
  postCreated: Date;
  private constructor(obj: AuthorViewModel) {
    this.name = obj.name
    this.portraitSource = obj.portraitSource
    this.postCreated = obj.postCreated
  }
  public static create(author: AuthorEntity, post: PostEntity): AuthorView {
    if (AuthorEntity.isValid(author) && PostEntity.isValid(post)) {
      const final: AuthorViewModel = {
        name: author.name,
        portraitSource: author.portrait.src,
        postCreated: post.dateCreated
      }
      return new AuthorView(final)
    }
    return AuthorView.createEmpty()
  }
  public static createEmpty(): AuthorView {
    return new AuthorView({ name: "not here", portraitSource: "blank", postCreated: new Date() })
  }
}
export class AuthorEntity extends Entity<AuthorProps> {
  name: string;
  portrait: PortraitEntity;

  private constructor(obj: AuthorProps) {
    super(obj)
    this.name = obj.name;
    this.portrait = obj.portrait;
  }
  public static isValid(obj: any): boolean {
    const mandatoryProps = ["name", "portrait"]
    return mandatoryProps.filter(key => Object.keys(obj).includes(key)).length >= mandatoryProps.length
  }
  public static createEmpty(): AuthorEntity {
    return new AuthorEntity({ name: "Cool User", portrait: PortraitEntity.createEmpty() });
  }
  public static create({ name, portrait }: AuthorProps): AuthorEntity {
    return new AuthorEntity({ name, portrait });
  }
  public static createFromJSON(json: string): AuthorEntity {
    const parsed = JSON.parse(json)
    if (AuthorEntity.isValid(parsed)) {
      return new AuthorEntity({ name: "Cool User", portrait: PortraitEntity.create(parsed.portrait) });
    }
    return AuthorEntity.createEmpty()
  }
}
