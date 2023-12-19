import { Routes, Route } from "react-router-dom";
import { HeaderComponent, PrivateRoute } from "./components";
import {
  About,
  Home,
  Listing,
  ListingShow,
  Profile,
  SignIn,
  SignUp,
  UpdateListing,
} from "./pages";
export default function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/listing/:id"} element={<ListingShow />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/create-listing"} element={<Listing />} />
          <Route path={"/update-listing/:id"} element={<UpdateListing />} />
        </Route>
      </Routes>
    </>
  );
}
