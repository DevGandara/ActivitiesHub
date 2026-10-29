import { Grid } from '@mui/material'
import ActivityList from './ActivityList'

export default function ActivitiesDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>Filtros de actividades</Grid>
    </Grid>
  )
}
