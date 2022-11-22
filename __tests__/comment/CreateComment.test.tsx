import { render, screen } from '@testing-library/react'

import { CreateComment } from '@/modules/Comment/CreateComment'
import crypto from 'crypto'

jest.mock("crypto")

const testComment = "Sombra OP No skill"

describe('Comments', () => {
  it('Doesnt Explode', () => {
    render(<CreateComment />)
  })

  it("There exists an input field", async () => {
    render(<CreateComment />)
    expect(screen.getByRole("textbox")).toBeVisible()
    expect(screen.getAllByRole('textbox').length).toBe(1)
  })

  it.todo("Comments are created when the user pressed the “enter” key.")
  it.todo("The UI matches the Figma designs.")
})