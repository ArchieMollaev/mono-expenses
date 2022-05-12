import { Center, Container, View } from "native-base";
import CategoriesList from "../components/CategoriesList";
import CreditCard from "../components/CreditCard";

const Dashboard = () => (
  <View bgColor={"#89bafa"}>
    <Center p="3%">
      <CreditCard
        type="black"
        cardName="Artur Mollaiev"
        cardNumber={"5411 **** **** 4242"}
        currency="UAH"
        amount={1960.5}
      />
    </Center>
    <Container
      borderRadius={16}
      overflow="hidden"
      minWidth={"100%"}
      backgroundColor="white"
    >
      <Center width="100%" pb={120}>
        <CategoriesList />
      </Center>
    </Container>
  </View>
);

export default Dashboard;
