import React from "react";
import { Button, TextField, Grid, Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="standard"
                {...register("firstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="family-name"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                variant="standard"
                {...register("lastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="companyName"
                label="Company Name"
                autoFocus
                variant="standard"
                {...register("companyName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoFocus
                variant="standard"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                autoFocus
                variant="standard"
                {...register("phoneNumber")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                required
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={4}
                autoFocus
                variant="standard"
                {...register("message")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "rgba(255, 255, 255, 0)", // Change background color
              color: "#000", // Change text color
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Change hover background color
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactForm;
