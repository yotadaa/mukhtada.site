"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import CheckSession, { session } from "../../Auth/Auth";

export default function Login() {
  const currentSession = async () => {
    return await session();
  }

  const handleSignIn = async () => {
    await signIn('google')
  }


  return (
    // <CheckSession>
    <div>
      <nav>

        <button onClick={() => handleSignIn()}>Sign In with Google</button>
      </nav>
    </div>
    // </CheckSession>
  );
}
