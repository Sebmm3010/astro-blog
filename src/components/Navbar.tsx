import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
      <div className="">
        <img src="/avatar.png" alt="profile picture" />
      </div>
      {/* Titulo */}
      <h1 className="text-lg font-bold text-center">
        <a href="/">Hua.</a>
      </h1>

      <div className="hidden lg:flex gap-12">
        <a href="/">Inicio</a>
        <a href="#">Servicios</a>
        <a href="/contact">Contactanos</a>
      </div>

      <div
        className="space-y-1 cursor-pointer lg:hidden z-50"
        onClick={() => setToggle(!toggle)}
      >
        {!toggle ? (
          <>
            <span className="block h-0.5 w-8 bg-Mateblack-500"></span>
            <span className="block h-0.5 w-6 bg-Mateblack-500"></span>
            <span className="block h-0.5 w-4 bg-Mateblack-500"></span>
          </>
        ) : (
          <svg
            viewBox="0 0 32 32"
            width="32"
            height="32"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z" />
          </svg>
        )}
      </div>

      {toggle && (
        <div className="fixed flex lg:hidden bg-white z-40 bottom-0 left-0 w-full h-screen items-center justify-center">
          <div className="flex flex-col gap-24 justify-center text-center text-lg">
            <a href="/">Inicio</a>
            <a href="#">Servicios</a>
            <a href="/contact">Contactanos</a>
          </div>
        </div>
      )}
    </nav>
  );
};
