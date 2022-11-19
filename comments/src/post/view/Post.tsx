interface PostProps {
  author: Author
  content: string
}
export function Post(props) {
  return <div>{props.content}</div>
}