import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useActivities } from '../../../lib/hooks/useActivities'
import { useNavigate, useParams } from 'react-router'

export default function ActivityForm() {
  const { id } = useParams()
  const { updateActivity, createActivity, activity, isLoadingActivity } =
    useActivities(id)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    console.log(activity)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: { [key: string]: FormDataEntryValue } = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    if (activity) {
      data.id = activity.id
      await updateActivity.mutateAsync(data as unknown as Activity)
      navigate(`/activities/${activity.id}`)
    } else {
      createActivity.mutateAsync(data as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`)
        },
      })
    }
  }

  if (isLoadingActivity) return <Typography>Loading...</Typography>

  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? 'Manage Activity' : 'Create Activity'}
      </Typography>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          defaultValue={activity?.title}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          name="description"
          defaultValue={activity?.description}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          defaultValue={activity?.category}
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          name="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0]
          }
        />
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          name="city"
          defaultValue={activity?.city}
        />
        <TextField
          label="Venue"
          variant="outlined"
          fullWidth
          name="venue"
          defaultValue={activity?.venue}
        />
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
          <Button color="inherit" variant="contained" onClick={() => {}}>
            Cancel
          </Button>
          <Button
            color="success"
            variant="contained"
            type="submit"
            loading={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
