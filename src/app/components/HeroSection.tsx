import React from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const BackgroundElement = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: 0,
  pointerEvents: 'none',
}));

const ContentStack = styled(Stack)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
  marginBottom: '37px',
}));

const MainHeadline = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(3rem, 8vw, 153px)',
  fontWeight: 400,
  letterSpacing: '-3.06px',
  lineHeight: 1.2,
  marginBottom: '37px',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
  },
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: 'clamp(1.2rem, 2vw, 33px)',
  fontWeight: 400,
  letterSpacing: '0.33px',
  color: theme.palette.text.primary,
  maxWidth: '1028px',
  margin: '0 auto',
  lineHeight: 1.5,
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer maxWidth={false}>
      {/* Background 3D Elements */}
      <BackgroundElement
        src="/assets/icosahedron-blue.svg"
        alt=""
        className="blur-light floating"
        style={{
          top: '20%',
          left: '10%',
          width: '336px',
          height: '336px',
        }}
      />
      
      <BackgroundElement
        src="/assets/icosahedron-yellow.svg"
        alt=""
        className="blur-heavy rotating"
        style={{
          top: '15%',
          right: '5%',
          width: '381px',
          height: '622px',
        }}
      />

      <ContentStack spacing={4}>
        <WelcomeText>
          WELCOME TO CRONOS
        </WelcomeText>
        
        <MainHeadline className="gradient-text">
          The Internet of<br />
          Blockchains.
        </MainHeadline>
        
        <SubtitleText>
          Cronos is an ever expanding ecosystem of connected 
          apps and services, built for a decentralized future.
        </SubtitleText>
      </ContentStack>
    </HeroContainer>
  );
};

export default HeroSection;