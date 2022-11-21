import { PortraitEntity } from "./PortraitEntity";

interface AuthorProps {
  name: string;
  portrait: PortraitEntity;
}

export class AuthorEntity implements AuthorProps {
  name: string;
  portrait: PortraitEntity;

  private constructor(obj: AuthorProps) {
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
