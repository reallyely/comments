import { Divider, Stack } from "@mui/material"

import { Comment } from "@/modules/Comment/Comment";
import { CommentView } from "@/modules/Comment/CommentEntity"
import { PropsWithChildren } from "react"

interface CommentsProps {
  comments?: Array<CommentView>
}
export function Comments(props: PropsWithChildren<CommentsProps>) {
  return <Stack

    divider={<Divider orientation="horizontal" flexItem />}
    spacing={2}
  >
    {props.comments && props.comments.length > 0 ? props.comments.map((props) => <Comment {...props} key={props.id.toValue()} />) : <></>}
  </Stack>
}