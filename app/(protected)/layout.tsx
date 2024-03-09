import Header from "@/src/components/Header";
import { Box, Container } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
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
