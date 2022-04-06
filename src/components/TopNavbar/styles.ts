import styled, { css } from "styled-components/native";

type TabIconProps = {
  active?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TabWrapper = styled.View`
  border-radius: 30;
  flex-direction: row;
  padding: 4px;
  background-color: ${({ theme }) => theme.COLORS.GREY_400};
  width: 110px;
  justify-content: space-between;
  align-items: center;
`;

export const TabIcon = styled.View<TabIconProps>`
  flex-direction: row;
  border-radius: 30px;
  padding: 5px 15px 5px 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.COLORS.WHITE : "transparent"};
`;
