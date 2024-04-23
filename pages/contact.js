import React from 'react';
import styled from 'styled-components';


const ContactContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
  font-size: 16px;
  resize: none; // Prevent resizing of the textarea
`;

const SubmitButton = styled.button`
  padding: 15px 20px;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted. Thank you!');
  };

  return (
    <div>

      <ContactContainer>
        <Title>Contact Us</Title>
        <ContactForm onSubmit={handleSubmit}>
          <FormInput type="text" placeholder="Your Name" required />
          <FormInput type="email" placeholder="Your Email" required />
          <FormTextArea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        <ContactInfo>
          <Text>Phone: (123) 456-7890</Text>
        </ContactInfo>
      </ContactContainer>

    </div>
  );
};

export default Contact;
