import * as React from 'react';
import {Slider, StyledEngineProvider, GlobalStyles, createTheme, ThemeProvider, CssBaseline} from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: red;
        }
      `
    }
  }
});

export default function PlainCssSlider() {
  return (
    <React.Fragment>
      {/* <div style={{width: 150}}>
        <GlobalStyles styles={{h1: {color: 'red'}}} />
        <h1>Plain CSS</h1>
      </div> */}
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <h1>css</h1>
      </ThemeProvider>
    </React.Fragment>
  );
}