import { CommentEntity, CommentViewModel } from "@/modules/Comment/CommentEntity"
import { PropsWithChildren, useState } from "react"
import { Avatar, Container, Stack, TextField, Typography } from "@mui/material"
import { Author } from "@/modules/Author/Author"
import { Reaction } from "../Reaction/Reaction"

export function Comment(props: PropsWithChildren<CommentViewModel>) {
  const [reactions, updateReactions] = useState({ hype: 0 })

  const handleUpdateReaction = (type: "hype") => (e) => {
    const newReactions = reactions[type] ? reactions[type]++ : 1

    updateReactions(Object.assign(reactions[type] = newReactions, reactions))
  }

  return <Stack>
    <Author
      portraitSource={props.author.portrait.src}
      name={props.author.name}
      postCreated={props.created}
    ></Author>
    <Typography variant="body1" sx={{ fontFamily: "Open Sans", fontSize: "12px" }}>{props.content}</Typography>
    <Reaction handleReaction={handleUpdateReaction} reactions={reactions ?? reactions} />

  </Stack>
}