import React from "react";
import { Outlet, Navigate } from "react-router";

export default function ProctedRoutes({user}) {
  console.log(user);
  return (
    user ? <Outlet></Outlet> : <Navigate to="/auth"></Navigate>
  );
}
