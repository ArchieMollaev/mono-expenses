import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { configure } from "mobx";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import TabsSwitcher from "./screens/TabsSwitcher";
import RootStore from "./stores/RootStore";
import { createContext } from "react";
import Navigation from "./navigation";
import ApiService from "./services/ApiService";

configure({
  enforceActions: "always",
});

const apiService = new ApiService();
const store = new RootStore(apiService);
export const RootStoreContext = createContext<RootStore>(store);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <RootStoreContext.Provider value={store}>
            <TabsSwitcher />
          </RootStoreContext.Provider>
          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
