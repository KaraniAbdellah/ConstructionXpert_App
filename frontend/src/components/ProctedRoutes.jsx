import React from "react";
import { Outlet, Navigate } from "react-router";

export default function ProctedRoutes({user}) {
  return user ? (
    <Outlet></Outlet>
  ) : (
    <>
      <Navigate to="/login"></Navigate>
    </>
  );
}
