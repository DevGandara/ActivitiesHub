import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/v1/events")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(act => act.id === id));
  }
  
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id); else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setSelectedActivity(activity)
      setActivities(activities.map(act => act.id === activity.id ? activity : act))
    } else {
      const newActivity = {...activity, id: activities.length.toString()}
      setSelectedActivity(newActivity)
      setActivities([...activities, newActivity])
    }
    setEditMode(false)
  }

  const handleDeleteActivuty = (id: string) => {
    setActivities(activities.filter(act => act.id !== id));
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <ActivitiesDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleCloseForm}
        submitForm={handleSubmitForm}
        deleteActivity={handleDeleteActivuty}
         />
      </Container>
    </Box>
  );
}

export default App;
