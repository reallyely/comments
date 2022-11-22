import { CreatePost, Posts } from '@/modules/Post/view/'

import { PostEntity } from '@/modules/Post/PostEntity'
import { render } from '@testing-library/react'

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
