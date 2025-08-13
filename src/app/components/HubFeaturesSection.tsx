import React from 'react';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import ArrowRightIcon from './icons/ArrowRightIcon';

const HubContainer = styled(Container)(({ theme }) => ({
  padding: '120px 0',
  position: 'relative',
}));

const SectionHeader = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '80px',
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 500,
  letterSpacing: '2.40px',
  color: 'rgba(255, 255, 255, 0.60)',
  marginBottom: '46px',
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'HelveticaNeue',
  fontSize: 'clamp(2.5rem, 6vw, 90px)',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: '46px',
  maxWidth: '739px',
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: 'clamp(1.2rem, 2vw, 33px)',
  fontWeight: 400,
  letterSpacing: '0.33px',
  color: theme.palette.text.primary,
  maxWidth: '707px',
  lineHeight: 1.5,
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px',
  marginBottom: '80px',
}));

const FeatureCard = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-start',
  padding: '40px',
  backgroundColor: 'transparent',
  borderRadius: '16px',
  gap: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #5992e8, #f0e979)',
  marginBottom: '20px',
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '50px',
  fontWeight: 700,
  letterSpacing: '0.50px',
  color: theme.palette.text.primary,
  marginBottom: '16px',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '27px',
  fontWeight: 400,
  letterSpacing: '0.27px',
  color: theme.palette.text.primary,
  lineHeight: 1.5,
}));

const CTASection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '20px',
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(95.46deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.51) 101.07%)',
  color: '#06070a',
  fontSize: '20px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 39px',
  borderRadius: '8px',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '20px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 24px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  transition: 'all 0.3s ease',
}));

const features = [
  {
    icon: PaidOutlinedIcon,
    title: 'Marketplace',
    description: 'Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.',
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: 'Security provider',
    description: 'With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.',
  },
  {
    icon: DeviceHubOutlinedIcon,
    title: 'Router',
    description: 'A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.',
  },
  {
    icon: EnhancedEncryptionOutlinedIcon,
    title: 'Custodian',
    description: 'Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.',
  },
];

const HubFeaturesSection: React.FC = () => {
  return (
    <HubContainer maxWidth="xl">
      <SectionHeader>
        <SectionLabel>
          ENTER THE CRONOS HUB
        </SectionLabel>
        
        <MainHeading className="gradient-text">
          The Heart of the<br />
          Interchain.
        </MainHeading>
        
        <DescriptionText>
          Serving as the economic center of Cronos, 
          the Cronos Hub is a blockchain that provides 
          vital services to the Interchain
        </DescriptionText>
      </SectionHeader>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>
              <feature.icon sx={{ fontSize: 40, color: '#ffffff' }} />
            </IconWrapper>
            <FeatureTitle>
              {feature.title}
            </FeatureTitle>
            <FeatureDescription>
              {feature.description}
            </FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
      
      <CTASection direction="row">
        <CTAButton endIcon={<ArrowRightIcon width={9} height={17} color="#06070a" />}>
          Cosmos Hub
        </CTAButton>
        <LearnMoreButton endIcon={<ArrowRightIcon width={9} height={17} color="#ffffff" />}>
          Learn more
        </LearnMoreButton>
      </CTASection>
    </HubContainer>
  );
};

export default HubFeaturesSection;