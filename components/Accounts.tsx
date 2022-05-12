import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import CreditCard from "./CreditCard";
import { mapCurrencyCode, formatUAH } from "../utils/utils";
import { RootStoreContext } from "../App";
import Carousel from "react-native-snap-carousel";
import { Account } from "../interfaces";
import { View } from "native-base";
import { useWindowDimensions } from "react-native";

const Accounts: React.FC = observer(() => {
  const layout = useWindowDimensions();
  const rootStore = useContext(RootStoreContext);
  const name = rootStore.userInfo?.name;
  const accounts = rootStore.uahBasicAccounts;

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <Carousel
        layout={"stack"}
        data={accounts}
        renderItem={({ item }: { item: Account }) => {
          return (
            <CreditCard
              key={item.id}
              type={item.type}
              cardName={name}
              cardNumber={item.maskedPan[0]}
              currency={mapCurrencyCode(item.currencyCode)}
              amount={formatUAH(item.balance)}
            />
          );
        }}
        sliderWidth={layout.width}
        itemWidth={layout.width / 1.2}
      />
    </View>
  );
});

export default Accounts;
