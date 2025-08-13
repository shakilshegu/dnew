import React from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const NetworkContainer = styled(Container)(({ theme }) => ({
  padding: '120px 0',
  textAlign: 'center',
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(2.5rem, 6vw, 90px)',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: '80px',
}));

const CardsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '40px',
  marginTop: '80px',
}));

const NetworkCard = styled(Stack)(({ theme }) => ({
  backgroundColor: '#141414',
  borderRadius: '16px',
  padding: '50px 40px',
  alignItems: 'flex-start',
  textAlign: 'left',
  gap: '20px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(20, 20, 20, 0.9)',
  },
}));

const CardLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
  marginBottom: '20px',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '45px',
  fontWeight: 700,
  letterSpacing: '0.45px',
  color: theme.palette.text.primary,
  marginBottom: '20px',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 400,
  letterSpacing: '0.24px',
  color: theme.palette.text.primary,
  lineHeight: 1.5,
  marginBottom: '40px',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #5992e8, #f0e979)',
  marginTop: 'auto',
}));

const networkOptions = [
  {
    label: 'CONNECT',
    title: 'Connect chains',
    description: 'Grow the economy of your chain by connecting to Cronos Hub services using IBC protocol.',
    icon: ConnectWithoutContactOutlinedIcon,
  },
  {
    label: 'INTEGRATE',
    title: 'Provide services',
    description: 'Get support to bring users to Cronos by providing services such as exchanges, wallets and more.',
    icon: IntegrationInstructionsOutlinedIcon,
  },
  {
    label: 'VALIDATE',
    title: 'Validator level',
    description: 'Join the ranks of trusted decentralized validator operators in the network and help secure the interchain.',
    icon: VerifiedOutlinedIcon,
  },
];

const NetworkSection: React.FC = () => {
  return (
    <NetworkContainer maxWidth="xl">
      <MainHeading className="gradient-text">
        Join the network.
      </MainHeading>
      
      <CardsGrid>
        {networkOptions.map((option, index) => (
          <NetworkCard key={index}>
            <CardLabel>
              {option.label}
            </CardLabel>
            
            <CardTitle>
              {option.title}
            </CardTitle>
            
            <CardDescription>
              {option.description}
            </CardDescription>
            
            <IconWrapper>
              <option.icon sx={{ fontSize: 30, color: '#ffffff' }} />
            </IconWrapper>
          </NetworkCard>
        ))}
      </CardsGrid>
    </NetworkContainer>
  );
};

export default NetworkSection;