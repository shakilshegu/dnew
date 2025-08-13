import React from 'react';
import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Container)(({ theme }) => ({
  padding: '80px 0 40px 0',
}));

const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '60px',
  marginTop: '60px',
}));

const FooterColumn = styled(Stack)(({ theme }) => ({
  gap: '20px',
}));

const ColumnTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '35px',
  fontWeight: 500,
  letterSpacing: '0.35px',
  color: theme.palette.text.primary,
  marginBottom: '20px',
}));

const ColumnLinks = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontSize: '28px',
  fontWeight: 400,
  letterSpacing: '0.28px',
  color: 'rgba(255, 255, 255, 0.45)',
  lineHeight: 2,
  whiteSpace: 'pre-line',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: 'rgba(255, 255, 255, 0.10)',
  margin: '60px 0 40px 0',
}));

const footerData = [
  {
    title: 'Learn',
    links: `Introduction

Features

Staking

Get HEDRON

FAQ`,
  },
  {
    title: 'Build',
    links: `Developer Portal

Ignite CLI

Cronos SDK

IBC Protocol`,
  },
  {
    title: 'Explore',
    links: `Tokens

Apps & Services

Wallets

Gravity DEX

Blog`,
  },
  {
    title: 'Participate',
    links: `Community

Contributors

Events

Newsletters`,
  },
  {
    title: 'Resources',
    links: `About

Press Kit

Design

Resources`,
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer maxWidth="xl">
      <StyledDivider />
      
      <FooterGrid>
        {footerData.map((column, index) => (
          <FooterColumn key={index}>
            <ColumnTitle>
              {column.title}
            </ColumnTitle>
            <ColumnLinks>
              {column.links}
            </ColumnLinks>
          </FooterColumn>
        ))}
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;