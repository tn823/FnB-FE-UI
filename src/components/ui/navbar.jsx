import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navBar = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 2.75,
      delay: 0.5,
      ease: "power4.inOut",
    }).play();
  }, []);

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      <a href="/home" aria-label="Logo" className="z-50">
        <img src={assets.logo} className="logo" />
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <Link
          to="home"
          ref={cta}
          className="button group relative hover:bg-transparent"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Order.</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
