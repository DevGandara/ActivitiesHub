import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function ActivityForm() {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
            Create Activity
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Title" variant="outlined" fullWidth />
            <TextField label="Description" variant="outlined" multiline rows={4} fullWidth />
            <TextField label="Category" variant="outlined" fullWidth />
            <TextField label="Date"  type="datetime-local" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
            <TextField label="Venue" variant="outlined" fullWidth />
            <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
                <Button color="inherit" variant="contained">
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