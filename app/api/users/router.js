import { NextRequest } from "next/server";

export async function POST(req, res) {
  let data = await req.json();
  console.log(data);
  return NextRequest.json({ res: "Data Send Successfully" });
}
