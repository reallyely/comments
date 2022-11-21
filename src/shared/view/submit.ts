import { KeyboardEventHandler } from "react"

export const submitOnEnter = (submitFn: any): KeyboardEventHandler => (e) => {
  if (e.key === "Enter") {
    submitFn(e)
  }
}