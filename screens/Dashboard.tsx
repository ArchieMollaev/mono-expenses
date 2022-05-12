import { Center, Container, View } from "native-base";
import Accounts from "../components/Accounts";
import CategoriesList from "../components/CategoriesList";

const Dashboard = () => {
  return (
    <View bgColor={"#89bafa"}>
      <Center
        p="3%"
        maxHeight={"30%"}
        minHeight={"20%"}
        alignItems={"flex-start"}
      >
        <Accounts />
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
};

export default Dashboard;
