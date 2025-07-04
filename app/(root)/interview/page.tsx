import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h2>Interview Generation</h2>
      <Agent userName={user?.name ?? ""} userId={user?.id} type="generate" />
    </>
  );
};

export default page;
