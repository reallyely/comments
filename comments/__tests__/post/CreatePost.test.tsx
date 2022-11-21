import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CreatePost } from '@/post/view'

describe('Home', () => {
  it('Doesnt Explode', () => {
    render(<CreatePost />)
  })

  it("There exists an input field", async () => {
    render(<CreatePost />)
    expect(screen.getByRole("textbox")).toBeVisible()
    expect(screen.getAllByRole('textbox').length).toBe(1)
  })
  it("...for the user to type.", async () => {
    const userText = "Not too much!"
    const user = userEvent.setup()
    render(<CreatePost />)
    const createPostInput = screen.getByLabelText("What's on your mind?")
    await user.type(createPostInput, userText)
    expect(createPostInput).toHaveValue(userText)
  })
  it("There exists a “Post” button to create a post.", () => {
    render(<CreatePost />)
    const createPostSubmitButton = screen.getByRole("button", { name: "Post" })
    expect(createPostSubmitButton).toBeVisible()
  })
  it("On post submission, input is cleared", async () => {
    const userText = "Not too much!"
    const user = userEvent.setup()
    render(<CreatePost />)
    const createPostInput = screen.getByLabelText("What's on your mind?")
    await user.type(createPostInput, userText)
    const createPostSubmitButton = screen.getByRole("button", { name: "Post" })
    await user.click(createPostSubmitButton)
    expect(createPostInput).toHaveValue("")
    expect(createPostInput).not.toHaveValue(userText)
  })
  it.todo("On “Post” click a new post is created ~~below the input section~~.")
  it.todo("The UI matches the Figma designs.")
})
