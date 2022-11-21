import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { ChangeEventHandler, PropsWithChildren, useState } from "react";

import { Card } from "@/modules/shared/view/Card"
import { SxProps } from "@mui/system";
import { submitOnEnter } from "@/components/submit";

const inputStyles: SxProps = {
  fontWeight: 500,
  fontSize: "14px",
  borderColor: "red",
  color: "#0A0C1299",
  borderRadius: "8px"
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

    if (props.handleCreatePost && postContent.length > 0) {
      props.handleCreatePost(postContent)
      updatePostContent("")
    }
  }
  return <Card>
    <Stack>
      <TextField
        sx={inputStyles}
        value={postContent}
        label="What's on your mind?"
        type="text"
        multiline
        onChange={handleUpdatePostContent}
        onKeyDown={submitOnEnter(submit)}
      />
      <Stack direction="row" justifyContent="flex-end">
        <Button sx={submitStyles} variant="contained" type="submit" onClick={submit}>Post</Button>
      </Stack>
    </Stack >
  </Card>
}
