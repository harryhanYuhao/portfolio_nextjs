import Image from "next/image";
import background from "../public/background.png";

export default function Home() {
  return (
    <main>
      <div className="flex items-center pt-20">
        <Image
          className="hidden lg:block pl-20 w-1/2"
          src={background}
          alt="background"
          width={700}
          height={700}
        />
        <div className="px-12 lg:px-6 align-center lg:flex-row">
          <h1 className="text-center text-7xl font-bold leading-[5rem]">
            Haec Data Poena Diu Discentibus
          </h1>
          <h2 className="text-center text-2xl font-medium leading-[3rem]">
            This penalty is given to those who is learning more.
            <br />
            <span className="text-xl">
              &mdash; <i>Satire,</i> 2c. Juvenal (note)
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
