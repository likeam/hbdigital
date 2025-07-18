import { NextResponse } from "next/server";
import { users } from "@/app/utils/db";
import fs from "fs";

export async function GET(req, res) {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "Required fild not found" },
      { status: 400 }
    );
  } else {
    users.push({ id, email, name, password });
    const updateUserArray = users;
    const updatedData = JSON.stringify(updateUserArray, null, 2);

    fs.writeFileSync(
      "./app/utils/db.js",
      `export const users = ${updatedData};`,
      "utf-8"
    );
    return NextResponse.json({ success: "Usr Successfully Created" });
  }
}

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

  const userInex = users.findIndex((user) => user.id === id);

  if (userInex === -1) {
    return NextResponse.json(
      { result: "Required fild not found" },
      { status: 400 }
    );
  }

  if (name) {
    users[userInex].name = name;
  }

  if (email) {
    users[userInex].email = email;
  }

  if (password) {
    users[userInex].password = password;
  }

  const updateUserArray = users;
  const updatedData = JSON.stringify(updateUserArray, null, 2);

  fs.writeFileSync(
    "./app/utils/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );
  return NextResponse.json({ success: "Usr Successfully Updated" });
}
