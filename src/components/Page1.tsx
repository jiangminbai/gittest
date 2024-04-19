import { AppBar, Box, Container, Menu, Stack,Drawer, Checkbox, IconButton,MenuItem,Typography, Button, Toolbar, Badge, List, ListItem, Divider, ListItemButton, ListItemText,
Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Tooltip, Popover, Card, CardContent,
TableSortLabel, TablePagination, Pagination
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Menu as MenuIcon, Mail as MailIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { ColumnType } from "../model/table";
import axios from "axios";

const columns: ColumnType[] = [
  { field: 'userId', },
  { field: 'cost', },
  { field: 'url', },
  { field: 'email', },
]


function BasicTable() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://3bbbaf3c-4c15-485f-a419-acd197d86ec6.mock.pstmn.io/table/list', {
      params: {
        page: page
      },
    }).then(res => {
      setData(res.data.data)
    })
  }, [])
  return (
    <>
    <TableContainer sx={{maxHeight: 200}} component={Paper} >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>
              <Checkbox
                
              />
            </TableCell>
            {
              columns.map((column, index) => 
                <TableCell key={index} sx={{fontWeight: 700}} align={!index ? 'left' : 'right'}>
                  <TableSortLabel
                    active={true} // need to fix
                    direction="desc"
                  >
                  {column.field.charAt(0).toUpperCase() + column.field.slice(1)}
                  </TableSortLabel>
                </TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
              <Checkbox
                
              />
            </TableCell>
              {
                columns.map((column, index) => (
                  <TableCell key={index} align={!index ? "left" : "right"} component={!index ? 'th' : 'td'}>
                    {row[column.field]}
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination
      variant="outlined"
      color="primary"
      count={10}
      page={page}
      onChange={(_, page) => setPage(page)}
    ></Pagination>
    </>
  );
}

const drawerWidth = 240;

const Main = styled(Box)<{
  open?: boolean;
}>(({ theme, open }) => ({
    flex: '1 1 auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

export default function Page1 () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(true);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <Stack
      direction={'row'}
      sx={{
        height: '100vh',
        bgcolor: '#f5f5f5',
        // flexGrow: 1
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          '& > :not(style)': {
            textAlign: 'center',
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Typography component={'h6'} sx={{my: 2}}>
          MUI
        </Typography>
        <Divider></Divider>
        <List>
          <ListItem key="Home" disablePadding>
            <ListItemButton>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="Products" disablePadding>
            <ListItemButton>
              <ListItemText primary="Products"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <AppBar
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(o => !o)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                "& > :not(style)": { fontWeight: 700, my: 2, color: 'white', display: 'block' },
              }}
            >
              <Button>profile</Button>
              <Button>profile</Button>
            </Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={2} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container>
          <BasicTable></BasicTable>
        </Container>
      </Main>
    </Stack>
  )
}