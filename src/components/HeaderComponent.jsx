import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <header className="shadow bg-slade-200-md">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex items-center p-3 rounded-lg bg-slate-100">
          <input
            className="w-24 bg-transparent focus:outline-none sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <IoSearchSharp className="text-xl text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          <Link to={"/home"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="text-slate-700 hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
