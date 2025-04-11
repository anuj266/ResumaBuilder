import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Dashboard() {
  const navigate = useNavigate();
  // This would typically come from your backend
  const resumes = [
    { id: 1, title: 'Software Engineer Resume', lastUpdated: '2024-03-15' },
    { id: 2, title: 'Web Developer Resume', lastUpdated: '2024-03-10' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Resumes
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/create-resume')}
        >
          Create New Resume
        </Button>
      </Box>

      <Grid container spacing={3}>
        {resumes.map((resume) => (
          <Grid item xs={12} sm={6} md={4} key={resume.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {resume.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Last updated: {resume.lastUpdated}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Download
                </Button>
                <Button size="small" color="secondary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard; 