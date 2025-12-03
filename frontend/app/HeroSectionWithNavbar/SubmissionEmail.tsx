import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';

interface SubmissionEmailProps {
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const SubmissionEmail: React.FC<Readonly<SubmissionEmailProps>> = ({
  subject,
  name,
  email,
  phone,
  message,
}) => (
  <Html>
    <Head />
    <Preview>{subject}</Preview>
    <Body style={{ backgroundColor: '#f6f6f6', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <Heading style={{ color: '#333', fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          {subject}
        </Heading>
        <Section style={{ marginTop: '20px' }}>
          <Text style={{ fontSize: '16px', color: '#555' }}><strong>Name:</strong> {name}</Text>
          <Text style={{ fontSize: '16px', color: '#555' }}><strong>Email:</strong> {email}</Text>
          {phone && <Text style={{ fontSize: '16px', color: '#555' }}><strong>Phone:</strong> {phone}</Text>}
          <Heading as="h3" style={{ color: '#333', fontSize: '20px', marginTop: '30px' }}>Message:</Heading>
          <Text style={{
            fontSize: '16px',
            color: '#555',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap',
          }}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SubmissionEmail;