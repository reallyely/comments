import { Post } from "@/post/view"
import { PostEntity } from "../mapping/PostEntity"
interface PostsProps {
  posts: Array<PostEntity>
}
export function Posts(props: PostsProps) {
  return <div>Posts
    {props.posts.map((props) => <Post {...props} key={props.id} />)}
  </div>
}