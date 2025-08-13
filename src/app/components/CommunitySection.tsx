import React from 'react';
import { Container, Typography, Stack, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '@mui/icons-material/Discord';
import ForumIcon from '@mui/icons-material/Forum';

const CommunityContainer = styled(Container)(({ theme }) => ({
  padding: '120px 0',
  position: 'relative',
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  direction: 'row',
  alignItems: 'flex-start',
  gap: '120px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: '80px',
  },
}));

const LeftContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: '54px',
  maxWidth: '600px',
}));

const RightContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: '40px',
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

const CommunityButton = styled(Button)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '45px',
  fontWeight: 700,
  letterSpacing: '0.45px',
  color: theme.palette.text.primary,
  textTransform: 'none',
  padding: '20px 0',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  transition: 'all 0.3s ease',
}));

const CommunityItem = styled(Stack)(({ theme }) => ({
  direction: 'row',
  alignItems: 'center',
  gap: '16px',
  padding: '20px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const CommunityTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '45px',
  fontWeight: 700,
  letterSpacing: '0.45px',
  color: theme.palette.text.primary,
}));

const CommunityDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '24px',
  fontWeight: 400,
  letterSpacing: '0.24px',
  color: 'rgba(255, 255, 255, 0.70)',
  lineHeight: 1.5,
  marginTop: '8px',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '3px solid #ffffff',
  flexShrink: 0,
}));

const NewsletterSection = styled(Stack)(({ theme }) => ({
  gap: '20px',
  marginTop: '80px',
}));

const NewsletterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '50px',
  fontWeight: 700,
  letterSpacing: '0.50px',
  color: theme.palette.text.primary,
}));

const NewsletterSubtext = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '27px',
  fontWeight: 400,
  letterSpacing: '0.27px',
  color: theme.palette.text.primary,
}));

const EmailInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    fontSize: '27px',
    padding: '16px',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.21)',
    fontSize: '27px',
  },
}));

const communityLinks = [
  {
    title: 'Community Chat',
    description: 'Ask general questions and chat with the worldwide community on Telegram.',
    icon: TelegramIcon,
  },
  {
    title: 'Twitter',
    description: 'Follow @cronos to get the latest news and updates from across the ecosystem.',
    icon: TwitterIcon,
  },
  {
    title: 'Developer Chat',
    description: 'Have technical questions about Cronos tools? Ask a developer on the Discord.',
    icon: DiscordIcon,
  },
  {
    title: 'Cronos Forum',
    description: 'Thinking about becoming a validator or interested in network matters?',
    icon: ForumIcon,
  },
];

const CommunitySection: React.FC = () => {
  return (
    <CommunityContainer maxWidth="xl">
      <ContentWrapper direction="row">
        <LeftContent>
          <MainHeading className="gradient-text">
            Meet the<br />
            worldwide<br />
            community.
          </MainHeading>
          
          <DescriptionText>
            Join a fast-growing community of 
            developers and innovators connected 
            all over the world, building the new 
            era of the internet.
          </DescriptionText>
          
          <CommunityButton>
            Community
          </CommunityButton>
        </LeftContent>
        
        <RightContent>
          {communityLinks.map((link, index) => (
            <CommunityItem key={index} direction="row">
              <IconWrapper>
                <link.icon sx={{ fontSize: 24, color: '#ffffff' }} />
              </IconWrapper>
              <Stack flex={1}>
                <CommunityTitle>
                  {link.title}
                </CommunityTitle>
                <CommunityDescription>
                  {link.description}
                </CommunityDescription>
              </Stack>
            </CommunityItem>
          ))}
        </RightContent>
      </ContentWrapper>
      
      <NewsletterSection>
        <NewsletterTitle>
          Receive transmissions
        </NewsletterTitle>
        
        <Stack direction="row" alignItems="center" gap={2}>
          <NewsletterSubtext>
            Unsubscribe at any time. Privacy policy
          </NewsletterSubtext>
          <IconWrapper>
            <TelegramIcon sx={{ fontSize: 24, color: '#ffffff' }} />
          </IconWrapper>
        </Stack>
        
        <EmailInput
          fullWidth
          placeholder="Your email"
          variant="outlined"
          sx={{ maxWidth: '600px' }}
        />
      </NewsletterSection>
    </CommunityContainer>
  );
};

export default CommunitySection;