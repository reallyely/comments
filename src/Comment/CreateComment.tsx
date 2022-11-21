import { Button, InputAdornment, SxProps, TextField } from "@mui/material"
import { PropsWithChildren, useState } from "react"

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { submitOnEnter } from "@/modules/shared/view/submit";

interface CreateCommentProps {
  handleCreateComment(value: string): void
}
export function CreateComment(props: PropsWithChildren<CreateCommentProps>) {
  const [value, updateCommentValue] = useState("")

  const submit = () => {
    if (value.length > 0) {

      props.handleCreateComment(value)
      updateCommentValue("")
    }
  }
  const getEndAdornment = (value: string) => {
    if (value && value.length > 0) {
      return <Button
        disableRipple
        sx={{
          textTransform: "unset",
          color: "grey",
          "&:hover": {
            color: "primary.main",
            backgroundColor: "transparent"
          },
          "&:active": {
            color: "#006CFA",
            backgroundColor: "transparent"

          }
        }}
        onClick={submit}
      > Post</Button >
    }
    return <AddCircleOutlineIcon sx={inputAdornmentStyle} />
  }

  return <TextField
    value={value}
    onChange={(event) => updateCommentValue(event.target.value)}
    multiline
    placeholder="Add comment"
    onKeyDown={submitOnEnter(submit)}
    InputProps={{
      disableUnderline: true,
      sx: inputStyleOverrides,
      startAdornment: <InputAdornment position="end"><ChatBubbleOutlineIcon sx={inputAdornmentStyle} /></InputAdornment>,
      endAdornment: <InputAdornment position="end">{getEndAdornment(value)}</InputAdornment>,
    }
    }
    variant="filled" sx={commentStyles(value)} />
}

const commentStyles = (value: string): SxProps => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  '& .MuiInputBase-root': {
    '&:hover': {
      boxSizing: "border-box",
      // backgroundColor: "white",
      borderColor: "primary.main",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    borderRadius: "100px",
    backgroundColor: value ? "white" : "#F1F4F8",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  '& .MuiInputBase-input.MuiFilledInput-input': {
    padding: "10px"
  }
})
const inputAdornmentStyle: SxProps = {
  height: "18px",
  width: "18px",
  margin: "16px"
}
const inputStyleOverrides: SxProps = {
  alignInput: "center",
  justifyContent: "center",
  padding: "0px",
  fontSize: "14px",
  fontWeight: 500
}

