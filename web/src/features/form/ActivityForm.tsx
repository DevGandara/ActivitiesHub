import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
    closeForm: () => void;
    activity: Activity | undefined;
}

export default function ActivityForm({ closeForm, activity }: Props) {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
            Create Activity
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Title" variant="outlined" fullWidth value={activity?.title || ''} />
            <TextField label="Description" variant="outlined" multiline rows={4} fullWidth value={activity?.description || ''} />
            <TextField label="Category" variant="outlined" fullWidth value={activity?.category || ''} />
            <TextField label="Date"  type="datetime-local" fullWidth value={activity?.date || ''} />
            <TextField label="City" variant="outlined" fullWidth value={activity?.city || ''} />
            <TextField label="Venue" variant="outlined" fullWidth value={activity?.venue || ''} />
            <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
                <Button color="inherit" variant="contained" onClick={closeForm}>
                    Cancel
                </Button>
                <Button color="success" variant="contained">
                    Create
                </Button>
            </Box>
        </Box>
    </Paper>
  )
}