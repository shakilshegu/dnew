import React from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const TechContainer = styled(Container)(({ theme }) => ({
  padding: '120px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  direction: 'row',
  alignItems: 'center',
  gap: '80px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: '60px',
  },
}));

const LeftContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: '49px',
  maxWidth: '624px',
}));

const RightContent = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '600px',
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(2.5rem, 6vw, 90px)',
  fontWeight: 400,
  lineHeight: 1.2,
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: 'clamp(1.2rem, 2vw, 33px)',
  fontWeight: 400,
  letterSpacing: '0.33px',
  color: theme.palette.text.primary,
  lineHeight: 1.5,
}));

const StatsGrid = styled(Stack)(({ theme }) => ({
  gap: '40px',
  marginTop: '60px',
}));

const StatItem = styled(Stack)(({ theme }) => ({
  gap: '11px',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(4rem, 10vw, 160px)',
  fontWeight: 400,
  lineHeight: 1,
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '30px',
  fontWeight: 400,
  letterSpacing: '0.30px',
  color: theme.palette.text.primary,
}));

const CylinderBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/assets/cylinder-bg.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: 0.8,
}));

const CircularStatsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '400px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '60px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
}));

const CircularStat = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  gap: '6px',
}));

const TechnologySection: React.FC = () => {
  return (
    <TechContainer maxWidth="xl">
      <ContentWrapper direction="row">
        <LeftContent>
          <SectionLabel>
            TECHNOLOGY
          </SectionLabel>
          
          <MainHeading className="gradient-text">
            The most trusted<br />
            way to build<br />
            value.
          </MainHeading>
          
          <DescriptionText>
            Cronos is a state-of-the-art blockchain 
            framework that powers the Cronos Hub 
            and its rapidly expanding orbit of 
            sovereign chains.
            <br /><br />
            Developers can use the SDK to build 
            innovative applications that create 
            value through exchange with the 
            Cronos Hub.
          </DescriptionText>
          
          <StatsGrid>
            <StatItem>
              <StatLabel>LOW FEES</StatLabel>
              <StatValue className="gradient-text-stats">$0.01</StatValue>
              <StatDescription>Enjoy the lowest fees - almost zero</StatDescription>
            </StatItem>
          </StatsGrid>
        </LeftContent>
        
        <RightContent>
          <CylinderBackground />
          <CircularStatsContainer>
            <CircularStat>
              <StatLabel>PROOF OF STAKE</StatLabel>
              <StatValue className="gradient-text-stats">99%</StatValue>
              <StatDescription>Lower carbon footprint</StatDescription>
            </CircularStat>
            
            <Stack direction="row" alignItems="center" spacing={2}>
              <CircularStat>
                <StatLabel>FAST TRANSACTIONS</StatLabel>
                <StatValue className="gradient-text-stats">5</StatValue>
                <StatDescription>Transactions confirmed in seconds.</StatDescription>
              </CircularStat>
              <StatValue className="gradient-text-stats" sx={{ fontSize: 'clamp(3rem, 8vw, 160px)' }}>
                sec
              </StatValue>
            </Stack>
          </CircularStatsContainer>
        </RightContent>
      </ContentWrapper>
    </TechContainer>
  );
};

export default TechnologySection;