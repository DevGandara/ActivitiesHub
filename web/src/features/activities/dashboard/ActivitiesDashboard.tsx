import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  cancelSelectActivity: () => void;
  selectActivity: (id: string) => void;
};

export default function ActivitiesDashboard({ activities, selectedActivity, cancelSelectActivity, selectActivity }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid>
      <Grid size={5}>
        {selectedActivity && <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
        <ActivityForm />
      </Grid>
    </Grid>
  );
}
