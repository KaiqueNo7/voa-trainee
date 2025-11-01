import Image from "next/image";
import Logo from "../logo";
import Cta from "../cta";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center text-white px-12 py-20 w-full mx-auto gap-8">
        <div className="flex-1 max-w-xl md:max-w-none text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A preparação completa para conquistar sua vaga de trainee nos processos mais disputados do país.
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Com o Voa Trainee, você aprende o que realmente faz diferença e ganha segurança pra brilhar em cada etapa do processo.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <Cta text="Quero ser um mentorado" />

            <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
              <Image
                src="/img/ruan.jpeg"
                alt="Mentor 1"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/img/tati.jpeg"
                alt="Mentor 2"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <span className="text-sm md:text-base">Esses serão seus mentores.</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl md:max-w-none flex justify-center md:justify-end">
          <Logo />
        </div>
      </div>
  )
}