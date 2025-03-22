import React from "react";
import { Outlet, Navigate } from "react-router";

export default function ProctedRoutes({isLogin}) {
  console.log(isLogin);
  return (
    isLogin ? <Outlet></Outlet> : <Navigate to="/auth"></Navigate>
  );
}
