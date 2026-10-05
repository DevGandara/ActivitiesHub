import { Grid, List, ListItem, ListItemText } from "@mui/material";

type Props = {
  activities: Activity[];
};

export default function ActivitiesDashboard({activities}: Props) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid size={9}>
        <List>
          {activities.map((activity: Activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
