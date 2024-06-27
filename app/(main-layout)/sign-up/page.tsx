"use client";
import { Suspense } from "react";
import SignUpForm from "./_components/sign-up-form";

const SignUpPage = () => {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  );
};

export default SignUpPage;
