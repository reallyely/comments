import { Post } from "@/modules/Post/view"
import { PostEntity } from "@/modules/Post/PostEntity"
interface PostsProps {
  posts: Array<PostEntity>
}
export function Posts(props: PostsProps) {
  return <>
    {/* @ts-ignore entity ID is a string but typed */}
    {props.posts.map((props) => <Post {...props} key={props.id} />)}
  </>
}