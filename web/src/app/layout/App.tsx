import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

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

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <ActivitiesDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
         />
      </Container>
    </Box>
  );
}

export default App;
