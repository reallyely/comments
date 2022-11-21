import { PostEntity } from '@/modules/Post/PostEntity'
import { render } from '@testing-library/react'
import { CreatePost, Posts } from '@/modules/Post/view/'
// Shim for uid creation in entities
import crypto from "crypto";
Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length)
  }
});

describe("UI Matches Figma designs", () => {
  it('Create Post', () => {
    const { container } = render(<CreatePost />)
    expect(container).toMatchSnapshot()
  })
  it('Posts', () => {
    const initialPost = PostEntity.createEmpty()
    const { container } = render(<Posts posts={[initialPost]} />)
    expect(container).toMatchSnapshot()
  })

})
