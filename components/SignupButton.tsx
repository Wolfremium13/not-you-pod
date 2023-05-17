"use client";
import { Button } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import React from "react";

const SignupButton = () => {
  const { data: session } = useSession();
  if (session && session.user && session.user.role === "admin") {
    return <></>;
  }
  return (
    <Button variant="gradient" size="sm" fullWidth>
      Sign Up
    </Button>
  );
};

export default SignupButton;
