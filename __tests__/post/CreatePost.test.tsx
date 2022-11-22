import { render, screen } from '@testing-library/react'

import { CreatePost } from '@/modules/Post/view'
import userEvent from '@testing-library/user-event'

const testPostContent = "Hey this is a really cool description of stuff I like! get rekt"

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

    const user = userEvent.setup()
    render(<CreatePost />)
    const createPostInput = screen.getByLabelText("What's on your mind?")
    await user.type(createPostInput, testPostContent)
    expect(createPostInput).toHaveValue(testPostContent)
  })
  it("There exists a “Post” button to create a post.", () => {
    render(<CreatePost />)
    const createPostSubmitButton = screen.getByRole("button", { name: "Post" })
    expect(createPostSubmitButton).toBeVisible()
  })
  // this will be easiest to do via E2E testing since this is the product of the composition of components
  it.todo("On post submission, input is cleared and a new post is created below the input section")
  it.todo("The UI matches the Figma designs.")
})
