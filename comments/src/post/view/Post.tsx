import { AuthorEntity } from "../mapping/AuthorEntity"

interface PostProps {
  author: AuthorEntity
  content: string
}
export function Post(props: PostProps) {
  return <div>
    <div>Author: {props.author.name} Portrait: <img src={props.author.portrait.src} ></img></div>
    <div>Content: {props.content}</div>
  </div>
}