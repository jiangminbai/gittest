import {
  colors,
  PaletteMode,
  createTheme,
  useTheme,
  Box,
  ThemeProvider,
  CssBaseline,
  Button,
  ButtonBase,
  Stack,
} from '@mui/material'
import * as icon from '@mui/icons-material'
import Stat from './Stat'
import React from 'react'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
})

const darkModeTheme = createTheme(getDesignTokens('light'))

function MyApp() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      mode
      <Button variant='contained'>sss</Button>
      <ButtonBase>
        sss
      </ButtonBase>
    </Box>
  )
}

export default function Comp () {
  return (
    <React.Fragment>
      {/* <mui.ThemeProvider theme={theme}>
        <mui.CssBaseline></mui.CssBaseline>
        <mui.Button variant='contained'>sss</mui.Button>
        <main>This app is using the dark mode</main>
      </mui.ThemeProvider> */}
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline></CssBaseline>
        <MyApp></MyApp>
      </ThemeProvider>
      <Stack direction="row" spacing={2}>
        <Stat value="1.9M" unit="Favorites" />
        <Stat value="5.1M" unit="Views" variant="outlined" />
      </Stack>
    </React.Fragment>
  )
}