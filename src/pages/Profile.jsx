import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return (
    <div className="container">
      <h1>Profile</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </>
          ) : (
            <p>Please log in to view your profile.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
