import { Stack, Typography } from "@mui/material"
import { useContext, useState } from "react"

import { Author } from "@/modules/Author/Author"
import { AuthorEntity } from "@/modules/Author/AuthorEntity"
import { Card } from "@/modules/shared/view/Card"
import { CommentEntity } from "@/modules/Comment/CommentEntity"
import { Comments } from "@/modules/Comment/Comments"
import { CreateComment } from "@/modules/Comment/CreateComment"
import { UserContext } from "@/modules/Author/UserContext";

interface PostProps {
  author: AuthorEntity
  content: string
  dateCreated: Date
}
export function Post(props: PostProps) {
  const [comments, updateComments] = useState([])
  const author = useContext(UserContext)
  const handleCreateComment = (commentValue: string) => {

    updateComments([...comments, CommentEntity.create({ content: commentValue, author })])
  }
  return <Card>
    <Stack>
      <Author
        portraitSource={props.author.portrait.src}
        name={props.author.name}
        postCreated={props.dateCreated}
      ></Author>
      <Typography variant="body1" sx={{ fontFamily: "Open Sans", fontSize: "12px" }}>{props.content}</Typography>
      <CreateComment handleCreateComment={handleCreateComment} />
      <Comments comments={comments ?? comments} />
    </Stack>
  </Card>
}