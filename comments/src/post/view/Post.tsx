import { AuthorEntity } from "@/modules/Author/AuthorEntity"
import { Author } from "@/modules/Author/Author"
import { PostEntity } from "../PostEntity"
import { Card } from "@/components/Card"
import { Stack, Typography } from "@mui/material"

interface PostProps {
  author: AuthorEntity
  content: string
  dateCreated: Date
}
export function Post(props: PostProps) {
  return <Card>
    <Stack sx={{ gap: "16px" }}>
      <Author
        portraitSource={props.author.portrait.src}
        name={props.author.name}
        postCreated={props.dateCreated}
      ></Author>
      <Typography variant="body1" sx={{ fontFamily: "Open Sans", fontSize: "12px" }}>{props.content}</Typography>
    </Stack>
  </Card>
}