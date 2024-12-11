import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Chats",
  description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chats" />

      <h1>CHATS</h1>
    </DefaultLayout>
  );
};

export default SignIn;
