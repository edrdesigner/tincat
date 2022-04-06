import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

type Props = {
  title?: string;
  color: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export function BottomMenu({ iconName, color }: Props) {
  return (
    <Container>
      <MaterialCommunityIcons size={20} name={iconName} color={color} />
    </Container>
  );
}
