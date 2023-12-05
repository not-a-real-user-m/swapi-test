import {FC, PropsWithChildren} from 'react';
import {ScrollRestoration, Link as NavigationLink} from 'react-router-dom';
import {AppBar, Box, Link, Typography} from '@mui/material';

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Box>
      <AppBar color="default" position="relative">
        <Box px={4} py={2}>
          <Typography variant="h4" component="h2">
            <Link to="/" component={NavigationLink} underline="none" color="inherit">SW Characters</Link>
          </Typography>
        </Box>
      </AppBar>

      <Box component="main" p={4} mb={5}>
        {children}
      </Box>

      <ScrollRestoration />
    </Box>
  );
}
