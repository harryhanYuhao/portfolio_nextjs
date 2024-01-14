import Image from "next/image";
import background from "../public/background.png";

export default function Home() {
  return (
    <main>
      <div className="flex-row lg:flex items-center justify-center">
        <div className="w-full lg:w-[50%] lg:px-6 flex justify-center relative">
          <Image
            className="h-auto w-[60%] lg:w-[100%] items-center"
            src={background}
            alt="background"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full lg:w-[50%] px-20 lg:px-6 lg:flex-row">
          <h1 className="text-center text-2xl md:text-5xl hyphens-auto font-bold leading-[2rem] md:leading-[4rem]">
            Omnes enim trahimur et ducimur ad cognitionis et scientiae cupiditatem ...
          </h1>
          <h2 className="text-center text-xl pt-2 md:pt-6 md:text-2xl font-medium leading-7 md:leading-[2rem]">
            All (human) thus are drawn and led to the desire for knowledge and science ... All of
            our mental strength will be turned ... to their pursuit.
            <br />
            <span className="text-base md:text-xl">
              &mdash; <i>On Moral Responsibility, </i> Cicero
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
