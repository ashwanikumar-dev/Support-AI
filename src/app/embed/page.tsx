import { getSession } from "@/lib/getSession";
import React from "react";
import EmbededClient from "../components/EmbededClient";

async function page() {
  const session = await getSession();
  return (
    <>
      <EmbededClient ownerId={session?.user?.id || ""} />
    </>
  );
}

export default page;
