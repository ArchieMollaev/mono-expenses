import { Container, Flex, Image, Spacer, Text } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React from "react";
import { AccountType } from "../interfaces";
const logo = require("../assets/images/mastercard.png");

interface CreditCardProps {
  type: AccountType;
  amount: number | string;
  currency: string;
  cardNumber: string;
  cardName: string;
}

function getCardColor(type: AccountType): ColorType {
  if (type === "black") {
    return "dark.200";
  }
  if (type === "white") {
    return "white";
  }
  if (type === "platinum") {
    return "gray.300";
  }
  if (type === "iron") {
    return "dark.300";
  }
  if (type === "yellow") {
    return "yellow.300";
  }
  return "gray.300";
}

function getCardTextColor(type: AccountType): ColorType {
  if (type === "black") {
    return "white";
  }
  if (type === "white") {
    return "black";
  }
  if (type === "platinum") {
    return "white";
  }
  if (type === "iron") {
    return "white";
  }
  if (type === "yellow") {
    return "black";
  }
  return "black";
}

const CreditCard: React.FC<CreditCardProps> = (props) => {
  const textColor = getCardTextColor(props.type);
  return (
    <Container
      width={300}
      height={180}
      bgColor={getCardColor(props.type)}
      borderRadius={12}
      p="5%"
    >
      <Flex direction="row" justify={"flex-end"} mb={3}>
        <Text mb="3" fontWeight="medium" color={textColor}>
          {props.amount}
        </Text>
        <Spacer />
        <Text mb="3" fontWeight="medium" color={textColor}>
          {props.currency}
        </Text>
      </Flex>

      <Text mb="3" fontWeight="medium" color={textColor} fontSize="xl">
        {props.cardNumber}
      </Text>
      <Spacer />
      <Flex direction="row" align={"center"}>
        <Text fontWeight="medium" fontSize={"sm"} color={textColor}>
          {props.cardName.toUpperCase()}
        </Text>
        <Spacer />
        <Image source={logo} alt="card-logo" size={"sm"} resizeMode="contain" />
      </Flex>
    </Container>
  );
};

export default CreditCard;
