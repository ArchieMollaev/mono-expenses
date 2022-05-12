import { SimpleLineIcons as Icon } from "@expo/vector-icons";
import { Center, ColorMode, Flex, Spacer, Text } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";

const NUM_ITEMS = 10;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  label: string;
  icon: string;
  expense: number;
  limit: number;
};

export default function App() {
  const [data, setData] = useState([
    {
      label: "Transfers",
      icon: "globe",
      expense: -121.11,
      limit: 0.0,
    },
    {
      label: "Cafe and Restaurants",
      icon: "cup",
      expense: -300.9,
      limit: 0.0,
    },
    {
      label: "Groceries and supermarkets",
      icon: "basket",
      expense: -756.63,
      limit: 0.0,
    },
    {
      label: "Cloth and shoes",
      icon: "bag",
      expense: -1201.0,
      limit: 0.0,
    },
    {
      label: `Games, music,\nEntertainment`,
      icon: "game-controller",
      expense: -80.99,
      limit: 0.0,
    },
    {
      label: "Sport",
      icon: "social-dribbble",
      expense: -178.17,
      limit: 0.0,
    },
    {
      label: "Trips",
      icon: "plane",
      expense: 0.0,
      limit: 0.0,
    },
    {
      label: "Other",
      icon: "grid",
      expense: 0.0,
      limit: 0.0,
    },
  ]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            {
              backgroundColor: "white",
              ...(isActive
                ? {
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    shadowColor: "black",
                  }
                : {}),
            },
          ]}
        >
          <Flex direction="row" justify={"flex-start"} align="center">
            <Center size={"md"} justifyContent="center" alignItems={"center"}>
              <Icon name={item.icon as any} size={28} color={"#a88d8d"} />
            </Center>
            <Center minWidth={"72"} flexDir={"row"} alignItems={"center"}>
              <Text fontSize={"md"} lineHeight={"md"} maxWidth="2/3">
                {item.label}
              </Text>
              <Spacer />
              <Center alignItems="flex-end">
                <Text fontSize={"xs"} lineHeight={"md"}>
                  {item.limit.toFixed(2)}
                </Text>
                <Text fontSize={"lg"} lineHeight={"md"}>
                  {item.expense.toFixed(2)}
                </Text>
              </Center>
            </Center>
          </Flex>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      style={{ minWidth: "100%" }}
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.label}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 65,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
});
