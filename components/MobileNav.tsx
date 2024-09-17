import Link from "next/link";
import { navLinks } from "./Nav";
import { CgClose } from "react-icons/cg";

const MobileNav = ({
  showNav,
  handleToggleNav,
}: {
  showNav: boolean;
  handleToggleNav: () => void;
}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed inset-0 left-0 top-0 z-[1000] h-screen w-full transform bg-black opacity-70 transition-all duration-500 ${navOpen}`}
      />

      <div
        className={`fixed z-[10000] flex h-full w-[80%] transform flex-col justify-center space-y-6 bg-[#c1205e] text-white transition-all delay-300 duration-500 sm:w-[60%] ${navOpen}`}
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.url}>
            <p className="ml-20 w-fit border-b-[1.5px] border-white pb-1 text-xl font-medium hover:text-yellow-300 sm:text-3xl">
              {navLink.label}
            </p>
          </Link>
        ))}
        <CgClose
          className="absolute right-[1.4rem] top-[0.7rem] size-6 text-white sm:size-8"
          onClick={handleToggleNav}
        />
      </div>
    </div>
  );
};

export default MobileNav;
