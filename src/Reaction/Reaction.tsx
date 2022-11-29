import { IconButton, Stack } from "@mui/material";
import { MouseEventHandler, PropsWithChildren } from "react";

import WhatshotIcon from '@mui/icons-material/Whatshot';

// There exists a button on posts to “like”.
// There exists a button on comments to “like”.
// A user’s like is displayed in the UI.
// The UI matches the Figma designs.

interface ReactionProps {
  reactions: any
  handleReaction: MouseEventHandler<HTMLAnchorElement>
}
const reactionStyles = (reactions: { hype: number; }) => ({
  color: reactions.hype > 0 ? "#F44900" : "unset",
  "&:hover": {
    background: "rgba(244, 73, 0, 0.3)",
    color: "#F44900"
  },
  "&:active": {
    background: "#F44900",
    color: "white"
  }
})

export function Reaction(props: PropsWithChildren<ReactionProps>) {

  return <Stack direction="row" justifyContent="flex-start">
    <IconButton href="" sx={reactionStyles(props.reactions)} onClick={props.handleReaction} type="button"><WhatshotIcon></WhatshotIcon></IconButton> {props.reactions.hype}
  </Stack >
}
