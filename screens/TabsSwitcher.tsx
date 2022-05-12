import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Dashboard from "./Dashboard";
import Charts from "./Charts";
import { getColorFormColorScheme } from "native-base/lib/typescript/theme/tools";

const renderScene = SceneMap({
  first: Dashboard,
  second: Charts,
});

export default function TabsSwitcher() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "first" }, { key: "second" }]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={(props) => (
        <TabBar {...props} style={{ backgroundColor: "#89bafa" }} />
      )}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
