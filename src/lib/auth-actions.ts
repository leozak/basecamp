import { cookies } from "next/headers";

import { verifyToken } from "./jwt";

const TOKEN_NAME = "auth-token";

export async function setAuthToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_NAME)?.value;
}

export async function deleteAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_NAME);
}

export async function verifyAuth() {
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  const payload = await verifyToken(token);
  return payload;
}
