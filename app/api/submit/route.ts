import { google } from "googleapis";

export async function POST(req: Request): Promise<Response> {
  const { companyName, name, phone, email, message, date } = await req.json();
  console.log(companyName, name, phone, email, message, date);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheet = google.sheets({
    auth,
    version: "v4",
  });

  const res = await sheet.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A2:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[companyName, name, phone, email, message, date]],
    },
  });

  return new Response("Successfully submitted!");
}
