import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile Page</h1>
      <form className="flex flex-col gap-4">
        <img
          className="self-center object-contain w-24 h-24 rounded-full"
          src={currentUser.avator}
          alt="avator"
        />
        <input
          className="p-3 border rounded-lg"
          placeholder="username"
          id="username"
          type="text"
        />
        <input
          className="p-3 border rounded-lg"
          placeholder="email"
          type="email"
          name=""
          id="email"
        />
        <input
          className="p-3 border rounded-lg"
          placeholder="password"
          type="password"
          name=""
          id="password"
        />
        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
