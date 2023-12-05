import {Box, Link, Typography} from '@mui/material';

export const ErrorFallback = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box mb={2}>
      <Typography variant="h3">Something went wrong</Typography>
    </Box>
    <Box>
      <Link href={'/'}>Go Home</Link>
    </Box>
  </Box>
);
