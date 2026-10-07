import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
};

export default function ActivitiesDashboard({activities}: Props) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid size={9}>
        <ActivityList activities={activities} />
      </Grid>
    </Grid>
  );
}
