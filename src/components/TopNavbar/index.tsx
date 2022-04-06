import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Container, TabWrapper, TabIcon } from "./styles";

export function TopNavbar() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <TabWrapper>
        <TabIcon active>
          <Fontisto size={18} name="tinder" color={COLORS.PRIMARY_600} />
        </TabIcon>
        <TabIcon>
          <Fontisto size={18} name="star" color={COLORS.GRAY_500} />
        </TabIcon>
      </TabWrapper>
    </Container>
  );
}
