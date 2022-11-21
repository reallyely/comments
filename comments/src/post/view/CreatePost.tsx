import { TextField, Stack, Container, Button, Box, Card } from "@mui/material";
import { SxProps } from "@mui/system";
import { ChangeEventHandler, PropsWithChildren, useState } from "react";
import { AuthorEntity } from "../mapping/AuthorEntity";

const containerStyles: SxProps = {
  /* Auto layout */
  padding: "16px",
  background: "#FFFFFF",
  /* eFuse Light/UI Colors/GlobalStroke */
  border: "1px solid #CED7E7",
  borderRadius: "10px",
  boxShadow: "none"
}
const inputStyles: SxProps = {
  fontWeight: 500,
  fontSize: "14px",
  borderColor: "red",
  color: "#0A0C1299"
}
const submitStyles: SxProps = {
  background: "#006CFA",
  borderRadius: "8px",
  textTransform: "unset",
  fontSize: "12px",
  fontWeight: 600
}
interface CreatePostProps {
  postContent?: string
  currentUser?: AuthorEntity
  handleUpdatePostContent?(postContent: string): void
  handleCreatePost?(postContent: string): void
}
export function CreatePost(props: PropsWithChildren<CreatePostProps>) {
  const [postContent, updatePostContent] = useState(props.postContent || "")

  const handleUpdatePostContent: ChangeEventHandler<HTMLInputElement> = (event) => {
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
  return <Card sx={
    containerStyles
  }>
    <Stack sx={{ gap: "16px" }}>
      <TextField
        sx={inputStyles}
        value={postContent}
        label="What's on your mind?"
        type="text"
        multiline
        onChange={handleUpdatePostContent}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            submit()
          }
        }}
      />
      <Stack direction="row" justifyContent="flex-end">
        <Button sx={submitStyles} variant="contained" type="submit" onClick={submit} >Post</Button>
      </Stack>
    </Stack >
  </Card>
}