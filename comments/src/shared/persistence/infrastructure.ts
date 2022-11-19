import { IPersistence } from "./model";
import { Result } from "types-ddd";

interface Mapper<T> {
  fromPersistence(item: string): Result<T>
}

export class LocalStoragePersistence<T> implements IPersistence<T> {
  public localStorage: Storage
  public tMapper: Mapper<T>
  constructor(windowLocalStorage: Storage, tClass: Mapper<T>) {
    this.localStorage = windowLocalStorage
    this.tMapper = tClass
    return this
  }
  public save(path: string, obj: T): Result<T> {
    try {
      this.localStorage.setItem(`${path}/${obj.id.value()}`, JSON.stringify(obj))
      return Result.Ok(obj)
    } catch (err: any) {
      return Result.fail(err.toString())
    }
  }

  public getOne(path: string): Result<T> {
    try {
      const item = this.localStorage.getItem(`${path}`)
      if (item) {
        const restoredItemResult = this.tMapper.fromPersistence(item)
        if (restoredItemResult.isOk()) {
          return Result.Ok(restoredItemResult.value())
        }
      }
      return Result.fail(`${path} not in storage`)
    } catch (err: any) {
      return Result.fail(err.toString())
    }
  }

  public getAll(path: string): Result<T[]> {
    try {
      const allKeys = Object.keys(this.localStorage)
      const filteredKeys = allKeys.filter(key => key.startsWith(path))
      const pathValues = filteredKeys.map(key => this.getOne(key).value())
      const valuesAsDomainObjects = pathValues.map(value => this.tMapper.fromPersistence(value as string).value())
      return Result.Ok(valuesAsDomainObjects)
    } catch (err: any) {
      return Result.fail(err.toString())
    }
  }
}