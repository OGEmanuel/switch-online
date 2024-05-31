import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const handler = async ({
  req,
  res,
}: {
  req: NextRequest;
  res: NextResponse;
}): Promise<NextResponse> => {
  if (req.method === "POST") {
    // const { companyName, name, phone, email, message } = req.body;
    console.log(req.body);
  }

  return res;
};
