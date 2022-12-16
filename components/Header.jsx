import Image from "next/image";
import Link from "next/link";
import logo from "./../images/logo.png";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center bg-gray-700 ">
          <li className="m-5 p-3">
            <Link href="/">
              <Image width={100} height={150} src={logo} alt="" />
            </Link>
          </li>
          <li className="m-5 p-3 text-white text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
