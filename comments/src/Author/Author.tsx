import { AuthorProps, AuthorViewModel } from "./AuthorEntity"
import { PropsWithChildren } from "react"
import { Avatar, Container, Stack, Typography } from "@mui/material"

export function Author(props: PropsWithChildren<AuthorViewModel>) {
  return <Stack sx={{ gap: "16px" }} alignItems="center" direction="row" >
    <Avatar sx={{ height: "60px", width: "60px" }} src={props.portraitSource}></Avatar>
    <Stack >
      <Typography variant="h2" sx={{ fontSize: "16px", fontWeight: 500 }}>{props.name}</Typography>
      <Typography variant="subtitle2" sx={{ fontSize: "12px", fontFamily: "Open Sans", fontWeight: 400 }}>{props.postCreated.toDateString()}</Typography>
    </Stack>
  </Stack>
}