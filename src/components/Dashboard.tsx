import { Profile } from "./Profile";
import Sidebar from "./Sidebar";

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
