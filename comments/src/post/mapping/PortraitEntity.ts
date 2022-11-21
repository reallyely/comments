

export interface PortraitProps {
  src: string;
}

export class PortraitEntity implements PortraitProps {
  src: string;
  private constructor(obj: PortraitProps) {
    this.src = obj.src;
  }
  public static isValid(obj: any): boolean {
    return Object.keys(obj).includes("src")
  }
  public static create(obj: PortraitProps): PortraitEntity {
    if (PortraitEntity.isValid(obj)) {
      return new PortraitEntity(obj)
    }
    return PortraitEntity.createEmpty()
  }
  public static createEmpty(): PortraitEntity {
    return new PortraitEntity({ src: "" });
  }
}
