import React from 'react';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from './icons/ArrowRightIcon';

const StatsContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  overflow: 'hidden',
}));

const BackgroundHelix = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: '478px',
  height: '618px',
  zIndex: 0,
  opacity: 0.8,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
  marginBottom: '49px',
  textAlign: 'center',
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(2.5rem, 6vw, 90px)',
  fontWeight: 400,
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '49px',
  maxWidth: '754px',
  margin: '0 auto 49px auto',
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: 'clamp(1.2rem, 2vw, 33px)',
  fontWeight: 400,
  letterSpacing: '0.33px',
  color: theme.palette.text.primary,
  textAlign: 'center',
  maxWidth: '732px',
  margin: '0 auto 60px auto',
  lineHeight: 1.5,
}));

const StatsGrid = styled(Stack)(({ theme }) => ({
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  marginBottom: '60px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '40px',
  },
}));

const StatItem = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(3rem, 8vw, 117px)',
  fontWeight: 400,
  lineHeight: 1,
  marginBottom: '16px',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '30px',
  fontWeight: 400,
  letterSpacing: '0.30px',
  color: theme.palette.text.primary,
}));

const ActionButtons = styled(Stack)(({ theme }) => ({
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '20px',
  },
}));

const LearnButton = styled(Button)(({ theme }) => ({
  color: '#06070a',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  fontSize: '20px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '20px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 24px',
  border: '1.5px solid #ffffff',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const StatsSection: React.FC = () => {
  return (
    <StatsContainer maxWidth="xl">
      <BackgroundHelix src="/assets/helix-purple.svg" alt="" />
      
      <ContentWrapper>
        <SectionLabel>
          COMMUNITY-OWNED AND OPERATED
        </SectionLabel>
        
        <MainHeading className="gradient-text">
          Enter a Universe<br />
          of Connected<br />
          Services.
        </MainHeading>
        
        <DescriptionText>
          Cronos apps and services connect using IBC, 
          the Inter-Blockchain Communication protocol. 
          This innovation enables you to freely exchange 
          assets and data across sovereign.
        </DescriptionText>
        
        <StatsGrid direction="row">
          <StatItem>
            <StatNumber className="gradient-text-stats">
              265+
            </StatNumber>
            <StatLabel>
              Apps & services
            </StatLabel>
          </StatItem>
          
          <StatItem>
            <StatNumber className="gradient-text-stats">
              $63B+
            </StatNumber>
            <StatLabel>
              Digital assets
            </StatLabel>
          </StatItem>
        </StatsGrid>
        
        <ActionButtons direction="row">
          <LearnButton>
            Learn
          </LearnButton>
          
          <ExploreButton endIcon={<ArrowRightIcon width={9} height={17} color="#ffffff" />}>
            Explore Tokens
          </ExploreButton>
        </ActionButtons>
      </ContentWrapper>
    </StatsContainer>
  );
};

export default StatsSection;