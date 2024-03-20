import { useState } from "react";
import { DashboardContext } from "./context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface AppProps {}

function App({}: AppProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Anna",
  });

  return (
    <DashboardContext.Provider value={user}>
      <Dashboard />
    </DashboardContext.Provider>
  );
}

export default App;
