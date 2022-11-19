
import { TextField, Container, Button } from "@mui/material";

export function CreatePost() {
  return <Container>
    <TextField id="create-post-input" placeholder="What's on your mind?"></TextField>
    <Button>Post</Button>
  </Container>
}