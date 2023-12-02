import { Routes, Route } from "react-router-dom";
import { About, Home, Profile, SignIn, SignUp } from "./pages";
export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/sign-in"} element={<SignIn />} />
      <Route path={"/sign-up"} element={<SignUp />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
}
