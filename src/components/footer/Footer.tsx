import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Loja", href: "/loja" },
  { name: "Sobre", href: "/sobre" },
];

const Footer = () => {
  return (
    <footer className="min-w-full border-t-4 border-primary-600 bg-footer py-6">
      <div className="mx-auto flex flex-col gap-y-8 md:flex-row items-center justify-between p-2 text-neutral-200 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        {/* INSTITUCIONAL */}
        <div className="flex flex-col justify-center items-center md:items-start font-extrabold text-neutral-200 md:w-1/3">
          BASECAMP
          <p className="text-center md:text-start font-normal text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas hic
            dolorem sint assumenda dignissimos eveniet dolore nihil voluptas!
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-1 justify-center items-center md:w-1/3">
          <h3 className="font-bold text-sm">Links</h3>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold text-sm opacity-60 hover:opacity-100"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CONTATO */}
        <div className="flex flex-col gap-2 justify-center items-center md:w-1/3">
          <h3 className="font-bold text-sm">Contato</h3>
          <div className="flex bg-background p-0.5 px-2 rounded-md shadow-sm">
            <input
              type="email"
              placeholder="Insira seu email"
              className="text-neutral-900 outline-none"
            />
            <button className="cursor-pointer">
              <SendHorizonal className="text-neutral-400 hover:text-neutral-900" />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer">
              <Image
                src="/mail.png"
                alt="Email"
                width={32}
                height={32}
                className="opacity-50 hover:opacity-100"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={22}
                height={22}
                className="opacity-50 hover:opacity-100"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={22}
                height={22}
                className="opacity-50 hover:opacity-100"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={22}
                height={22}
                className="opacity-50 hover:opacity-100"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-neutral-200 pt-6 p-2">
        © 2026 BASECAMP. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
