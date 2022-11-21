
import { TextField, Container, Button, FormControl } from "@mui/material";
import { ChangeEventHandler, FormEventHandler, PropsWithChildren, useState } from "react";
import { AuthorEntity } from "../mapping/AuthorEntity";
type PostWithContent = {
  content: string
}
interface CreatePostProps {
  postContent: string
  currentUser: AuthorEntity
  handleUpdatePostContent: ChangeEventHandler
  handleCreatePost?(postContent: string): void
}
export function CreatePost(props: PropsWithChildren<CreatePostProps>) {
  const [postContent, updatePostContent] = useState(props.postContent || "")

  const handleUpdatePostContent: ChangeEventHandler = (event) => {
    if (props.handleUpdatePostContent) {
      props.handleUpdatePostContent(event.target.value)
    }
    updatePostContent(event.target.value)
  }
  const submit = () => {
    if (props.handleCreatePost) {
      props.handleCreatePost(postContent)
    }
    updatePostContent("")
  }
  return <Container>
    <TextField
      value={postContent}
      label="What's on your mind?"
      type="text"
      onChange={handleUpdatePostContent}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          submit()
        }
      }}
    />
    <Button type="submit" onClick={submit} >Post</Button>
  </Container >
}
