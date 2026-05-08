"use server";

import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  number: string;
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

  console.log(existingUser);

  return { success: true, message: "Bem-vindo de volta à trilha!" };
}

// Compara a senha digitada com o Hash do banco
// const senhasConferem = await bcrypt.compare(plainPassword, hashSalvoNoBanco);
//
// Dica de segurança: Não diga se foi o e-mail ou a senha que errou,
// diga apenas "Credenciais inválidas" para evitar vazamento de contas.
// if (!senhasConferem) {
//    throw new Error('E-mail ou senha incorretos. Você pegou a trilha errada.');
// }
