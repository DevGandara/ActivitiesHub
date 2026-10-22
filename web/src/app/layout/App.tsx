import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useState } from 'react'
import NavBar from './NavBar'
import { useActivities } from '../../lib/hooks/useActivities'
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard'

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined)
  const [editMode, setEditMode] = useState(false)
  const { activities, isPending } = useActivities()

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((act) => act.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleCloseForm = () => {
    setEditMode(false)
  }

  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //   setSelectedActivity(activity)
    //   setActivities(
    //     activities.map((act) => (act.id === activity.id ? activity : act)),
    //   )
    // } else {
    //   const newActivity = { ...activity, id: activities.length.toString() }
    //   setSelectedActivity(newActivity)
    //   setActivities([...activities, newActivity])
    // }
    // setEditMode(false)
    console.log(activity)
    setEditMode(false)
  }

  const handleDeleteActivity = (id: string) => {
    // setActivities(activities.filter((act) => act.id !== id))
    // if (selectedActivity && selectedActivity.id == id)
    //   setSelectedActivity(undefined)
    console.log(id)
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivitiesDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            submitForm={handleSubmitForm}
            deleteActivity={handleDeleteActivity}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
