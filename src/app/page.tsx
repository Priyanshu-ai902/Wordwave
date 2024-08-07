import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
            <div className="text-center"></div>
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">Word
              <span className="text-purple-700">Wave</span></h1>
            <p className="mt-3 text-purple-300">WordWave: Translate, Connect, Communicate </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
