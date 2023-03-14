import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import {
  ForgotPassword,
  Login,
  SignUp,
  ResetPassword,
  PrivateRoutes,
} from "./auth/index";
import {
  Shop,
  Sell,
  Finance,
  Home,
  PageNotFound,
  SavedCars,
} from "./pages/index";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <LayoutGroup>
        <AnimatePresence>
          <Routes>
            {/* -------auth-routes--------- */}
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route
              path="resetpassword/:resetToken"
              element={<ResetPassword />}
            />

            {/* -------Open-routes--------- */}
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sell" element={<Sell />} />
            <Route path="finance" element={<Finance />} />

            {/* -------Private-routes--------- */}
            <Route element={<PrivateRoutes />}>
              {/* -------private custormers-routes--------- */}

              <Route path="saved" element={<SavedCars />} />

              {/* -------private employee-routes--------- */}
            </Route>

            {/* --------routes-Not-matched-------- */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default App;
