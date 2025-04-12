import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import ResumePreview from './ResumePreview';

const steps = ['Personal Information', 'Education', 'Experience', 'Skills', 'Template Selection'];

function CreateResume() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    education: [],
    experience: [],
    skills: [],
    template: ''
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.personalInfo.name}
                onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.personalInfo.phone}
                onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.personalInfo.address}
                onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Professional Summary"
                value={formData.personalInfo.summary}
                onChange={(e) => handleChange('personalInfo', 'summary', e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box>
            <Button variant="contained" sx={{ mb: 2 }}>
              Add Education
            </Button>
            {/* Education form fields would go here */}
          </Box>
        );
      case 2:
        return (
          <Box>
            <Button variant="contained" sx={{ mb: 2 }}>
              Add Experience
            </Button>
            {/* Experience form fields would go here */}
          </Box>
        );
      case 3:
        return (
          <Box>
            <Button variant="contained" sx={{ mb: 2 }}>
              Add Skills
            </Button>
            {/* Skills form fields would go here */}
          </Box>
        );
      case 4:
        return (
          <FormControl fullWidth>
            <InputLabel>Select Template</InputLabel>
            <Select
              value={formData.template}
              label="Select Template"
              onChange={(e) => handleChange('template', '', e.target.value)}
            >
              <MenuItem value="template1">Professional</MenuItem>
              <MenuItem value="template2">Creative</MenuItem>
              <MenuItem value="template3">Modern</MenuItem>
            </Select>
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 3, mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create New Resume
            </Typography>
            
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </Container>
      </div>
      <div style={{ flex: 1 }}>
        <ResumePreview data={formData} />
      </div>
    </div>
  );
}

export default CreateResume; 