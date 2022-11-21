import { Result, UID, } from "types-ddd"


/**
 * For saving data to persist
 *
 * @export
 * @interface IPersistence
 * @template T the domain object being CRUDed
 */
export interface IPersistence<T> {
  save(path: string, obj: T): Result<T>
  getOne(path: string, id: UID): Result<T>
  getAll(path: string): Result<T[]>
}
