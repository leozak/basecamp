"use server";

import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { signToken } from "@/lib/jwt";
import { setAuthToken, deleteAuthToken } from "@/lib/auth-actions";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  number: string;
  admin?: boolean;
  complement?: string;
}

export async function createUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);

  const userCount = await prisma.user.count();

  const admin = userCount === 0 ? true : false;

  return prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: hashedPassword,
      phone: user.phone,
      city: user.city,
      state: user.state,
      cep: user.cep,
      address: user.address,
      number: user.number,
      complement: user.complement ? user.complement : "",
      admin: admin,
    },
  });
}

export async function loginUser(user: Pick<User, "email" | "password">) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!existingUser) {
    throw new Error("Usuário ou senha incorretos");
  }

  const isPasswordValid = await bcrypt.compare(
    user.password,
    existingUser.password,
  );

  if (!isPasswordValid) {
    throw new Error("Usuário ou senha incorretos");
  }

  const token = await signToken({
    userId: existingUser.id,
    email: existingUser.email,
    admin: existingUser.admin,
  });

  await setAuthToken(token);

  revalidatePath("/", "layout");

  if (existingUser.admin) {
    redirect("/dashboard");
  } else {
    redirect(`/users/${existingUser.id}`);
  }
}

export async function logoutUser() {
  await deleteAuthToken();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function getUsers() {
  const users: Omit<User, "password">[] = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      admin: true,
      phone: true,
      city: true,
      state: true,
      cep: true,
      address: true,
      number: true,
      complement: true,
      createdAt: true,
    },
  });
  return users;
}

export async function editUser(userId: string, user: User) {
  let updateUser;
  if (user.password.length > 0) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: user.name,
        email: user.email,
        admin: user.admin,
        phone: user.phone,
        city: user.city,
        state: user.state,
        cep: user.cep,
        address: user.address,
        number: user.number,
        complement: user.complement,
        password: user.password,
      },
    });
  } else {
    updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: user.name,
        email: user.email,
        admin: user.admin,
        phone: user.phone,
        city: user.city,
        state: user.state,
        cep: user.cep,
        address: user.address,
        number: user.number,
        complement: user.complement,
      },
    });
  }

  return updateUser;
}

export async function newUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);

  return prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      state: user.state,
      cep: user.cep,
      address: user.address,
      number: user.number,
      complement: user.complement ? user.complement : "",
      admin: user.admin,
      password: hashedPassword,
    },
  });
}
