import { Result, Entity } from 'types-ddd'
import { LocalStoragePersistence } from "@/persistence/infrastructure"

interface MockProps {
  secretValue: string
}
class MockDomainType extends Entity<MockProps> {
  secretValue: string
  constructor(props: MockProps) {
    super(props)
    this.secretValue = props.secretValue
  }
  public static fromPersistence<T>(stringObj: string) {
    const obj = JSON.parse(stringObj)
    const domainType = new MockDomainType(obj)
    return Result.Ok(domainType)
  }
}
const createLocalStoragePersistence = () => new LocalStoragePersistence<MockDomainType>(globalThis.localStorage, MockDomainType)

describe("Local Storage Persistence", () => {
  it("can be created", () => {
    const localStorage = createLocalStoragePersistence()
    expect(localStorage)
  })
  it("can save an object", () => {
    const localStorage = createLocalStoragePersistence()
    const objectToSave = new MockDomainType({ secretValue: "tester" })
    const saveResult = localStorage.save("test", objectToSave)
    expect(saveResult.isOk()).toBe(true)
    expect(saveResult.value()).toBe(objectToSave)
  })
  it("returns an error result on failure", () => {
    const localStorage = createLocalStoragePersistence()
    // @ts-ignore - forcing fail state by supplying incorrect parameters
    const result = localStorage.save("test")
    expect(result.isFail()).toBe(true)
    expect(result.error()).toBeDefined()
    expect(typeof result.error()).toBe("string")
  })
  it("Gets a previously saved object", () => {
    const localStorage = createLocalStoragePersistence()
    const objectToSave = new MockDomainType({ secretValue: "tester" })
    const saveResult = localStorage.save("test", objectToSave)
    expect(saveResult.isOk()).toBe(true)
    const getResult = localStorage.getOne(`test/${objectToSave.id.value()}`)
    expect(getResult.isOk()).toBe(true)
    expect(getResult.value().secretValue).toBe("tester")

  })
})
