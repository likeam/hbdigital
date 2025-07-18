"use client";
import { Button, Card, Input, ListItem } from "@material-tailwind/react";
import React, { useState } from "react";

const SpecificUser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`);

    if (response.ok) {
      const res = await response.json();
      setUserData(res.user);
    } else {
      console.log("Error Fetching user Data");
      setUserData(null);
    }
  };
  return (
    <div className="flex">
      <div className="w-72">
        <Input
          label="Enter User ID"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button onClick={fetchUserData}>Fetch User</Button>
      </div>
      {userData ? (
        userData.map((d) => (
          <div key={d.id}>
            <Card className=" w-96 mt-5">
              <ListItem>ID: {d.id}</ListItem>
              <ListItem>Name: {d.name}</ListItem>
              <ListItem>Email: {d.email}</ListItem>
              <ListItem>Age: {d.age}</ListItem>
              <ListItem>Password: {d.password}</ListItem>
            </Card>
          </div>
        ))
      ) : (
        <p className=" mt-2">Search for a specific users</p>
      )}
    </div>
  );
};

export default SpecificUser;
