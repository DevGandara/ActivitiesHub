import { Box, Button, Paper, TextField, Typography } from '@mui/material'

type Props = {
  closeForm: () => void
  activity: Activity | undefined
  submitForm: (activity: Activity) => void
}

export default function ActivityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: { [key: string]: FormDataEntryValue } = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    if (activity) data.id = activity.id
    submitForm(data as unknown as Activity)
  }

  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
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
          defaultValue={activity?.title || ''}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          name="description"
          defaultValue={activity?.description || ''}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          defaultValue={activity?.category || ''}
        />
        <TextField
          label="Date"
          type="datetime-local"
          fullWidth
          name="date"
          defaultValue={activity?.date || ''}
        />
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          name="city"
          defaultValue={activity?.city || ''}
        />
        <TextField
          label="Venue"
          variant="outlined"
          fullWidth
          name="venue"
          defaultValue={activity?.venue || ''}
        />
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
          <Button color="inherit" variant="contained" onClick={closeForm}>
            Cancel
          </Button>
          <Button color="success" variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
