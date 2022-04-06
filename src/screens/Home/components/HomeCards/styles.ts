import styled, { css } from "styled-components/native";
import { Animated } from "react-native";

type ActionProps = {
  action?: string;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 100px;
  margin-top: 32px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const AnimatedCard = styled(Animated.View)`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 18px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  elevation: 2;
`;

export const AnimatedTag = styled(Animated.View)<ActionProps>`
  position: absolute;
  top: 36px;
  left: ${({ action }) => (action === "like" ? "20px" : "auto")};
  right: ${({ action }) => (action === "dislike" ? "20px" : "auto")};
  transform: ${({ action }) =>
    action === "like" ? "rotate(-30deg)" : "rotate(30deg)"};
  z-index: 2;
  border-width: 6px;
  border-color: ${({ action, theme }) =>
    action === "like" ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_500};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const TagText = styled.Text<ActionProps>`
  color: ${({ action, theme }) =>
    action === "like" ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_500};
  font-size: 32px;
  font-weight: bold;
  padding: 4px 10px;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover'
})`
  flex: 1;
  height: 448px;
`;

export const InfoWrapper = styled.View`
  padding: 15px 20px;
  position: absolute;
  bottom: 0;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  min-width: 88%;
  flex: 1;
  flex-grow: 1;
  margin: 0 20px;
  borderTopRightRadius: 16px;
  borderTopLeftRadius: 16px;
`;

export const Name = styled.Text`
  font-size: 18px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.GRAY_800};
  `};
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 13px;
  margin-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.GRAY_500};
  `};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-top: 40px;
  elevation: 1;
`;
