import {Box, Card, CardContent, Grid, Skeleton, Typography} from '@mui/material';

const stubCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Stub = () => (
  <Grid container spacing={4} justifyContent="center">
    {stubCards.map((stub) => (
      <Grid key={stub} item xs={12} sm={6} md={4} display="flex" justifyContent="center" data-testid="CHARACTER_STUB">
        <Card>
          <Box width={290} height={400}>
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
          <CardContent>
            <Typography variant="h5" component="div">
              <Skeleton/>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
