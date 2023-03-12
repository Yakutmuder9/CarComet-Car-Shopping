import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="login" replace={true} />;
};

export default PrivateRoutes;
