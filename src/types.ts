import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email("Email inválido!").min(1, "Email é obrigatório!"),
  password: z.string().min(6, "Deve conter no mínimo 6 caracteres!"),
});

export type UserLoginInputs = z.infer<typeof UserLoginSchema>;

export const UserSiginUpSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório!"),
    email: z.string().email("Email inválido!").min(1, "Email é obrigatório!"),
    password: z.string().min(6, "Deve conter no mínimo 6 caracteres!"),
    repassword: z.string().min(6, "Deve conter no mínimo 6 caracteres!"),
    phone: z.string().min(1, "Telefone é obrigatório!"),
    city: z.string().min(1, "Cidade é obrigatório!"),
    state: z.string().min(1, "Estado é obrigatório!"),
    cep: z.string().min(1, "CEP é obrigatório!"),
    address: z.string().min(1, "Endereço é obrigatório!"),
    number: z.string().min(1, "Número é obrigatório!"),
    complement: z.string(),
  })
  .refine((data) => data.password === data.repassword, {
    message: "As senhas não coincidem!",
    path: ["repassword"],
  });

export type UserSiginUpInputs = z.infer<typeof UserSiginUpSchema>;
