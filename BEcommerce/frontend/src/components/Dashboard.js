import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from "@mui/icons-material/Login"


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Dashboard() {


  
  return (
    // <AppBar position="static" color=''>
    <Box sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'} >
      <Toolbar disableGutters>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: 'flex',
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            // letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Recipro
        </Typography>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
          <Typography>Log in</Typography>
          <Tooltip title="Open settings">
            <IconButton >
              <LoginIcon />
            </IconButton>
          </Tooltip>
          {/* <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} >
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu> */}
        </Box>
      </Toolbar>
    </Box>
  );
}
export default Dashboard;


