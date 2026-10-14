import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  cancelSelectActivity: () => void;
  selectActivity: (id: string) => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
};

export default function ActivitiesDashboard({ activities, selectedActivity, cancelSelectActivity, selectActivity, editMode, openForm, closeForm }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />}
        { editMode &&
        <ActivityForm closeForm={closeForm} activity={selectedActivity} /> }
      </Grid>
    </Grid>
  );
}
