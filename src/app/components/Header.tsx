import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from './icons/ArrowRightIcon';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: 'none',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '20px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(95.46deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.51) 101.07%)',
  color: '#06070a',
  fontSize: '26.15px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between items-center py-4">
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'DM Sans',
              fontSize: '26.15px',
              fontWeight: 500,
              color: 'white',
            }}
          >
            CRONOS
          </Typography>

          <Stack direction="row" spacing={10} className="hidden md:flex">
            <NavButton>Learn</NavButton>
            <NavButton>Build</NavButton>
            <NavButton>Explore</NavButton>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <CTAButton endIcon={<ArrowRightIcon width={9} height={17} color="#06070a" />}>
              Get CRONOS
            </CTAButton>
          </Stack>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;