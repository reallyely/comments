// import { render } from '@testing-library/react'
// import Home from '@/pages/index'

// it.skip('renders homepage unchanged', () => {
//   const { container } = render(<Home />)
//   expect(container).toMatchSnapshot()
// })
import { render } from '@testing-library/react'
import { CreatePost } from '@/post/view'

it('UI Matches the Figma designs', () => {
  const { container } = render(<CreatePost />)
  expect(container).toMatchSnapshot()
})
