import React, { useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = styled.form`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #1c1c1c;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  &:hover {
    transform: rotateX(4deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_obg2xa6', 'template_28xkx8a', form.current, 'zk_SNTwfwg1p6jj3P')
      .then((res) => {
        toast.success('Message sent successfully!', { position: 'top-right' });
        e.target.reset();
      })
      .catch((err) => {
        toast.error('Failed to send message. Please try again.', { position: 'top-right' });
      });
  };

  return (
    <Box id="contact" bgcolor="#0f0f0f" color="white" py={5} px={2}>
      <ToastContainer />
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <TextField
          name="name"
          label="Your Name"
          variant="filled"
          fullWidth
          required
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white', backgroundColor: '#2a2a2a' } }}
        />
        <TextField
          name="email"
          label="Your Email"
          variant="filled"
          fullWidth
          required
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white', backgroundColor: '#2a2a2a' } }}
        />
        <TextField
          name="message"
          label="Message"
          variant="filled"
          fullWidth
          required
          multiline
          rows={4}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white', backgroundColor: '#2a2a2a' } }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Form>
    </Box>
  );
}

export default Contact;
