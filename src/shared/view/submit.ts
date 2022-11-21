import { KeyboardEventHandler } from "react"

export const submitOnEnter = (submitFn: any): KeyboardEventHandler => (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    submitFn(e)
  }
}