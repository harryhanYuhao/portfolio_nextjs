import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex-row lg:flex lg:items-center lg:justify-center pb-[5vh] lg:px-[5vh] z-0">
        <div className="w-full lg:w-[50%] lg:px-6 flex justify-center ">
          <Image
            className="h-auto items-center -z-10"
            src="/background.png" /* in public folder*/
            alt="background"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full lg:w-[50%] px-[5vh] lg:px-6 lg:flex-row">
          <h1 className="text-center text-3xl md:text-5xl hyphens-auto font-bold leading-[2rem] md:leading-[4rem]">
            Omnes enim trahimur et ducimur ad cognitionis et scientiae cupiditatem ...
          </h1>
          <h2 className="text-center text-xl pt-2 md:pt-6 md:text-2xl font-medium leading-7 md:leading-[2rem]">
            All therefore are drawn and led to the desire for knowledge and science ... All of our
            mental strength will be turned ... to their pursuit.
            <br />
            <span className="text-base md:text-xl">
              &mdash;{" "}
              <i>
                <a
                  href="https://en.wikipedia.org/wiki/De_Officiis"
                  className="underline decoration-dotted"
                >
                  On Moral Responsibilities
                </a>
                ,{" "}
              </i>{" "}
              Cicero
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
