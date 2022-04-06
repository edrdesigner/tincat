import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const NumberWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 100}px;
`;

export const PageNumber = styled.Text`
  font-size: 126px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.GRAY_500};
  `};
`;
