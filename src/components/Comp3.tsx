import { Box, Container, Paper, Stack, Divider } from "@mui/material";
import { Fragment, memo } from "react";

export default memo(function Comp3() {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </Fragment>
  )
})