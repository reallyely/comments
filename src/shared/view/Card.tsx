import { CardProps, Card as MuiCard, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";
const containerStyles: SxProps = {
  padding: "16px",
  gap: "16px",
  background: "#FFFFFF",

  border: "1px solid #CED7E7",
  borderRadius: "10px",
  boxShadow: "none"
}

export function Card(props: PropsWithChildren<CardProps>) {
  return <MuiCard sx={
    containerStyles
  }>
    {props.children}
  </MuiCard>

}
