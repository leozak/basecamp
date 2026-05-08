import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative aspect-3/1">
      <Image src="/banner.png" alt="Banner" fill />
      <div className="hidden sm:block absolute top-18 sm:top-5 md:top-5 lg:top-10 2xl:top-20 right-80 sm:right-5 md:right-5 lg:right-25 xl:right-10 2xl:right-48">
        <h1 className="font-bold text-6xl sm:text-4xl lg:text-4xl xl:text-6xl 2xl:text-8xl text-white">
          Explore o Inexplorado
        </h1>
        <p className="hidden md:mt-4 sm:flex sm:text-xs lg:text-md xl:text-xl 2xl:text-2xl w-110 lg:w-100 xl:w-180 2xl:w-250 text-neutral-200 font-bold">
          Equipamentos de alta performance projetados para resistir às condições
          mais extremas. Sua jornada começa onde o asfalto termina.
        </p>
      </div>
    </div>
  );
};

export default Banner;
