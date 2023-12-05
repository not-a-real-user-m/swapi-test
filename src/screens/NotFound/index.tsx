import {Link as NavigationLink} from 'react-router-dom';
import {Box, Typography, Link} from '@mui/material';

export default function NotFoundScreen() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={2}>
        <Typography variant="h3">Not found</Typography>
      </Box>
      <Box>
        <Link to={'/'} component={NavigationLink}>Go Home</Link>
      </Box>
    </Box>
  );
}
