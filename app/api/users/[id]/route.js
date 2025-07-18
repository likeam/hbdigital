import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 2- Get Specific  User

export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user, ok: true });
}

//  3- Login

export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const {
    name: uName,
    email: uEmai,
    password: uPassword,
  } = users.find((u) => u.id === id);

  if (uName === name && uEmai === email && uPassword === password) {
    return NextResponse.json({ result: "Successfully logged in" });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the inputs fields" });
  } else {
    return NextResponse.json({ result: "Invalid Credentials" });
  }
}

// 4- Delete User

export async function DELETE(req, res) {
  const { id } = await res.params;

  const userInex = users.findIndex((user) => user.id === id);

  if (userInex === -1) {
    return NextResponse.json(
      { result: "Required User not found" },
      { status: 400 }
    );
  }

  users.splice(userInex, 1);

  const updateUserArray = users;
  const updatedData = JSON.stringify(updateUserArray, null, 2);

  fs.writeFileSync(
    "./app/utils/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );
  return NextResponse.json({ success: "Usr Successfully Deleted" });
}
