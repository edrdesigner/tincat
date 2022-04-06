import React, { useEffect, useState, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { Text } from 'react-native';
import { TopNavbar } from '@components/TopNavbar';
import { HomeCards } from './components/HomeCards/HomeCards';

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <TopNavbar />
      <HomeCards />
    </Container>
  )
}
