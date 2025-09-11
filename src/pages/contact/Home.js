import React, { useContext } from 'react'
import SectionPaper from '../../components/SectionPaper'
import { useForm } from 'react-hook-form'
import ContactMe from '../../models/ContactMe.Model'
import { TextField, Button, Box, useTheme, Grid2 } from '@mui/material'
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { EmailPublicKey, EmailServiceKey, EmailTemplateKey } from '../../constants/appConst'
import { toast } from 'react-toastify'
import { ThemeContext } from '../../contexts/ThemeContext'
import RequiredLabel from '../../components/required/RequiredLabel'

const ContactHomePage = () => {
  const {
    register, 
    reset,
    handleSubmit, 
    formState: { errors ,isSubmitting }
  } = useForm({
    resolver: zodResolver(ContactMe),
  });

  const {isDark} = useContext(ThemeContext);
  const theme = useTheme();
  const onSubmit = async (data) => {
    try {
      let name = data.firstName + ' ' + data.lastName;

      const result = await emailjs.send(
        EmailServiceKey,
        EmailTemplateKey,
        {
          name: name,
          subject: data.subject,
          message: data.message
        },
        EmailPublicKey
      );

      if(result){
        toast.success("Successfully Sent!")
      } else{
        toast.error("Error: Something went wrong!")
      }
      reset();

    } catch (error){
      toast.error("Server Error!")
      console.log("Error: ", error);
    }
  };

  const styleTxt = {
    '& .MuiInputLabel-root': {
      color: isDark ? theme.palette.primary.main : theme.palette.primary.dark, // default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: isDark ? theme.palette.primary.main : theme.palette.primary.dark, // focused label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: isDark ? theme.palette.primary.main : theme.palette.primary.dark, // default border
      },
      '&:hover fieldset': {
        borderColor: isDark ? theme.palette.primary.darkGrey : theme.palette.primary.dark, // hover border
      },
      '&.Mui-focused fieldset': {
        borderColor: isDark ? theme.palette.primary.darkGrey : theme.palette.primary.dark, // focused border
      },
      color: isDark ? '#fff' : '#000', 
    },
  };
  

  return (
    <SectionPaper
      goTo='#contact'
      title='CONTACT ME'
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%'
        }}
      >
<Grid2 container spacing={1} width="100%">
  <Grid2 size={6}>
    <TextField
      sx={styleTxt}
      label={<RequiredLabel label="First Name" />}
      {...register('firstName')}
      placeholder="Enter your first name"
      error={!!errors.firstName}
      helperText={errors.firstName?.message}
      fullWidth
      variant="outlined"
    />
  </Grid2>

  <Grid2 size={6}>
    <TextField
      sx={styleTxt}
      label={<RequiredLabel label="Last Name" />}
      {...register('lastName')}
      placeholder="Enter your last name"
      error={!!errors.lastName}
      helperText={errors.lastName?.message}
      fullWidth
      variant="outlined"
    />
  </Grid2>
</Grid2>



        <TextField
        sx={styleTxt}
          label={<RequiredLabel label="Subject"/>}
          {...register('subject')}
          placeholder='Enter the subject'
          error={!!errors.subject}
          helperText={errors.subject?.message}
          fullWidth
          variant="outlined"
        />

        <TextField
        sx={styleTxt}
          label={<RequiredLabel label="Message"/>}
          {...register('message')}
          placeholder='Enter your message'
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors.message?.message}
          fullWidth
          variant="outlined"
        />

        <Button 
          type="submit" 
          variant="contained" 
          disabled={isSubmitting}
          sx={{ mt: 1, py: 1.5 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </SectionPaper>
  )
}

export default ContactHomePage
