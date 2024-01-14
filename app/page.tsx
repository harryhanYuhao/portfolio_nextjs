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
        <div className="w-full lg:w-[50%] px-12 lg:px-6 lg:flex-row">
          <h1 className="text-center text-5xl md:text-7xl font-bold leading-[3rem] md:leading-[5rem]">
            Haec Data Poena Diu Discentibus
          </h1>
          <h2 className="text-center text-xl pt-2 md:pt-6 md:text-2xl font-medium leading-7 md:leading-[2rem]">
            This penalty is given to those who learns more.
            <br />
            <span className="text-base md:text-xl">
              &mdash; <i>Satires,</i> 2 c. Juvenal (note)
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
