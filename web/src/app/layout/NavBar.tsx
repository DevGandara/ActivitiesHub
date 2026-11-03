import { Group } from '@mui/icons-material'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  MenuList,
} from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundImage: 'linear-gradient(to right, #5a0a53, #bd18a7)' }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MenuList>
              <MenuItem
                component={NavLink}
                to="/"
                sx={{ display: 'flex', gap: 2 }}
              >
                <Group fontSize="large" />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Activities Hub
                </Typography>
              </MenuItem>
            </MenuList>
            <MenuList disablePadding sx={{ display: 'flex' }}>
              <MenuItemLink to="/activities">Activities</MenuItemLink>
              <MenuItemLink to="/create-activity">Create Activity</MenuItemLink>
            </MenuList>
            User Menu
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
