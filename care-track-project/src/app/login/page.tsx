import React from "react";
// import { createUser, getUser } from "@/server/appointment";
import LoginForm from "@/components/form";

const Page = async () => {
//   await createUser();
//   const getAlluser = await getUser();
//   console.log(getAlluser)
  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default Page;
