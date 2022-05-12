import { Container, Flex, Image, Spacer, Text } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React from "react";
import { AccountType } from "../interfaces";
const logo = require("../assets/images/mastercard.png");

interface CreditCardProps {
  type: AccountType;
  amount: number;
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
  return "dark.100";
}

const CreditCard: React.FC<CreditCardProps> = (props) => {
  return (
    <Container
      width={300}
      height={180}
      bgColor={getCardColor(props.type)}
      borderRadius={12}
      p="5%"
    >
      <Flex direction="row" justify={"flex-end"} mb={3}>
        <Text mb="3" fontWeight="medium" color={"white"}>
          {props.amount.toFixed(2)}
        </Text>
        <Spacer />
        <Text mb="3" fontWeight="medium" color={"white"}>
          {props.currency}
        </Text>
      </Flex>

      <Text mb="3" fontWeight="medium" color={"white"} fontSize="xl">
        {props.cardNumber}
      </Text>
      <Spacer />
      <Flex direction="row" align={"center"}>
        <Text fontWeight="medium" fontSize={"sm"} color={"white"}>
          {props.cardName.toUpperCase()}
        </Text>
        <Spacer />
        <Image source={logo} alt="card-logo" size={"sm"} resizeMode="contain" />
      </Flex>
    </Container>
  );
};

export default CreditCard;
