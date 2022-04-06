import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import { Dimensions, PanResponder, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import api from "@services/api";
import {
  Container,
  CardsContainer,
  AnimatedCard,
  Avatar,
  InfoWrapper,
  Name,
  Bio,
  Footer,
  FooterButton,
  AnimatedTag,
  TagText,
} from "./styles";
import { useFocusEffect } from "@react-navigation/native";

type CatProps = {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: {
    id: string;
    url: string;
  };
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const FooterButtonStyle = {
  elevation: 1,
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 3,
    height: 5,
  },
};

export function HomeCards() {
  const [cats, setCats] = useState<CatProps[]>([]);
  const { COLORS } = useTheme();

  function fetchCats() {
    api
      .get("/breeds?limit=20&page=0")
      .then((response) => {
        setCats(response.data);
      })
      .catch(() => Alert.alert("Was not possible to fetch some cats"));
  }

  useFocusEffect(
    useCallback(() => {
      fetchCats();
    }, [])
  );

  async function handleDislike() {
    const [cat, ...rest] = cats;

    setCats(rest);
  }

  async function handleLike() {
    const [cat, ...rest] = cats;

    const data = {
      image_id: cat.image.id,
      sub_id: "tincat",
      value: 1,
    };

    await api.post("/votes", data);

    setCats(rest);
  }

  const position = new Animated.ValueXY();

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
    outputRange: ["-10deg", "10deg"],
    extrapolate: "clamp",
  });

  const rotateAndTranslate = {
    transform: [
      { rotate },
      { translateX: position.x },
      { translateY: position.y },
    ],
  };

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.9, 1],
    extrapolate: "clamp",
  });

  const likeOpacity = position.x.interpolate({
    inputRange: [50, SCREEN_WIDTH / 2],
    outputRange: [0, 0.8],
    extrapolate: "clamp",
  });

  const dislikeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, -50],
    outputRange: [0.8, 0],
    extrapolate: "clamp",
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return true;
    },
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        handleLike();

        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          position.setValue({ x: 0, y: 0 });
        });
      } else if (gestureState.dx < -120) {
        handleDislike();

        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Container>
      <CardsContainer>
        {cats.map((cat, index) => {
          if (index === 0) {
            return (
              <AnimatedCard
                key={cat.id}
                style={[
                  {
                    zIndex: cats.length - index,
                  },
                  rotateAndTranslate,
                ]}
                {...panResponder.panHandlers}
              >
                <AnimatedTag style={{ opacity: likeOpacity }} action="like">
                  <TagText action="like">LIKE</TagText>
                </AnimatedTag>
                <AnimatedTag
                  style={{ opacity: dislikeOpacity }}
                  action="dislike"
                >
                  <TagText action="dislike">NOPE</TagText>
                </AnimatedTag>
                <Avatar source={{ uri: cat.image?.url }} />
                <InfoWrapper>
                  <Name>{cat.name}</Name>
                  <Bio>{cat.origin}</Bio>
                </InfoWrapper>
              </AnimatedCard>
            );
          } else {
            return (
              <AnimatedCard
                key={cat.id}
                style={{
                  zIndex: cats.length - index,
                  opacity: index === 1 ? nextCardOpacity : 0,
                  transform: [{ scale: nextCardScale }],
                }}
              >
                <Avatar source={{ uri: cat.image?.url }} />
                <InfoWrapper>
                  <Name>{cat.name}</Name>
                  <Bio>{cat.origin}</Bio>
                </InfoWrapper>
              </AnimatedCard>
            );
          }
        })}
      </CardsContainer>

      {cats.length > 0 && (
        <Footer>
          <FooterButton style={FooterButtonStyle} onPress={handleDislike}>
            <MaterialCommunityIcons
              size={27}
              name="close"
              color={COLORS.SECONDARY_500}
            />
          </FooterButton>
          <FooterButton style={FooterButtonStyle} onPress={handleLike}>
            <MaterialCommunityIcons
              size={27}
              name="heart"
              color={COLORS.SUCCESS_900}
            />
          </FooterButton>
        </Footer>
      )}
    </Container>
  );
}
