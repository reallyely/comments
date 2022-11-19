import { Post } from "@/post/view"
export function Posts(props) {
  return <div>Posts
    {props.posts.map(Post)}
  </div>
}