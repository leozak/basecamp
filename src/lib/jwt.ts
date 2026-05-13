import { JWTPayload, SignJWT, jwtVerify } from "jose";
import prisma from "./prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signToken(payload: JWTPayload, expiresIn: string = "7d") {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, secret);

    const existingUser = await prisma.user.findUnique({
      where: {
        id: verified.payload.userId as string,
        email: verified.payload.email as string,
      },
    });

    if (!existingUser) return null;

    return verified.payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
