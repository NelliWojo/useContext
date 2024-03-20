import { useUserContext } from "../context";

interface SidebarProps {}
export default function Sidebar({}: SidebarProps) {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription status : {user.isSubscribed}</div>
    </div>
  );
}


