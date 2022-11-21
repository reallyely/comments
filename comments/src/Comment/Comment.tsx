import { CommentEntity, CommentViewModel } from "@/modules/Comment/CommentEntity"
import { PropsWithChildren } from "react"
import { Avatar, Container, Stack, TextField, Typography } from "@mui/material"
import { Author } from "@/modules/Author/Author"

export function Comment(props: PropsWithChildren<CommentViewModel>) {
  return <Stack>
    <Author
      portraitSource={props.author.portrait.src}
      name={props.author.name}
      postCreated={props.created}
    ></Author>
    <Typography variant="body1" sx={{ fontFamily: "Open Sans", fontSize: "12px" }}>{props.content}</Typography>
  </Stack>
}