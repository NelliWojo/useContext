import { useUserContext } from "../context";

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return <div>{user.name}</div>;
}
