import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="p-3 border rounded-lg focus:shadow-md focus:outline-none"
          id="username"
          placeholder="username"
          type="text"
        />
        <input
          className="p-3 border rounded-lg focus:shadow-md focus:outline-none"
          id="email"
          placeholder="email"
          type="email"
        />
        <input
          className="p-3 border rounded-lg focus:shadow-md focus:outline-none"
          id="password"
          placeholder="password"
          type="password"
        />
        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have a account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
