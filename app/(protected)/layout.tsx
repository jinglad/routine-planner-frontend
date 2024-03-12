"use client";

import Header from "@/src/components/Header";
import { Box, Container } from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/login");
    }
  }, [session]);

  return (
    <>
      <Header />
      <Box component="main">
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </>
  );
};

export default ProtectedLayout;
