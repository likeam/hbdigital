import React from "react";

const Display = () => {
  console.log(process.env.MONGODB_URI);
  const mongo = process.env.MONGODB_URI;
  console.log(process.env.PORT);
  const port = process.env.PORT;
  return (
    <div>
      <h1>{mongo}</h1>
      <h1>{port}</h1>
    </div>
  );
};

export default Display;
