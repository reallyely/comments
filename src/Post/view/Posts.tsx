import { Post } from "@/modules/Post/view"
import { PostEntity } from "@/modules/Post/PostEntity"
interface PostsProps {
  posts: Array<PostEntity>
}
export function Posts(props: PostsProps) {
  return <>
    {props.posts.map((props) => <Post {...props} key={props.id.toValue()} />)}
  </>
}