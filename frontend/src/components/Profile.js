import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  let token = getAccessTokenSilently();
  console.log(token, "**");
  console.log("user", user);
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
    </div>
  );
};

export default Profile;
