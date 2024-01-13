import Image from "next/image";
import background from "../public/background.png";

export default function Home() {
  return (
    <main>
      <div className="flex items-center pt-20">
        <Image
          className="hidden lg:block pl-20"
          src={background}
          alt="background"
          width={600}
          height={600}
        />
        <div className="px-12 lg:px-6 align-center lg:flex-row">
          <h1 className="text-center text-5xl font-bold leading-[4rem]">
            Haec Data Poena Diu Discentibus
          </h1>
          <h2 className="text-center text-xl font-medium leading-[2rem]">
            This penalty is only given to those who is learning more.
            <br />
            <span className="text-base">
              &mdash; <i>The Antiquary</i>, W. Scott, Edinburgh, 1816 </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
