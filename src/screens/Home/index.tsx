import React from 'react';
import { Container } from './styles';
import { TopNavbar } from '@components/TopNavbar';
import { HomeCards } from './components/HomeCards/HomeCards';

export function Home() {
  return (
    <Container>
      <TopNavbar />
      <HomeCards />
    </Container>
  )
}
