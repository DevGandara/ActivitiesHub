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
          />
        )}
      </Container>
    </Box>
  )
}

export default App
