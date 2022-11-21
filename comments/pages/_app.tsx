// import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
const withTheme = createTheme({
  palette: {
    primary: {
      main: "#006CFA"
    }
  },
  typography: {
    fontFamily: "Poppins"
  }

});
export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={withTheme}>
    <CssBaseline />
    <Container maxWidth="lg" sx={{ marginTop: "1em" }}>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
}
