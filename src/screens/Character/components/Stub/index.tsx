import {Box, Grid, Skeleton} from '@mui/material';

const stubRows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Stub = () => (
  <Grid container spacing={2} mt={1}>
    <Grid item xs={12} textAlign={{xs: 'center', md: 'initial'}}>
      <Skeleton width={300} height={65}/>
    </Grid>

    <Grid
      item
      order={{md: 2}}
      xs={12}
      md={5}
      textAlign={{xs: 'center', md: 'right'}}
    >
      <Skeleton variant="rectangular" width={400} height={550} />
    </Grid>

    <Grid item order={{md: 1}} xs={12} md={6} mr={{md: 3}} justifyContent={{xs: 'center'}}>
      {stubRows.map((row) => (
        <Box key={row} mb={3}>
          <Skeleton variant="rectangular" width="100%" height={56} />
        </Box>
      ))}
    </Grid>
  </Grid>
);
