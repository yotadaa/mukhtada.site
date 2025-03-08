'use client';

import Image from "next/image";
import { signOut, getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [ms, setMs] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      console.log(session?.user);
      setMs(session?.user || null);
    };
    fetchSession();
  }, []);

  const handleSignIn = async () => {
    await signIn('google')
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>Application currently in maintenance</p>
      {(ms && ms) == null ?
        <>
          <div>
            <p>You are not yet logged in</p>
            <button onClick={handleSignIn}>Sign in with Google</button>
          </div>
        </> :
        <div>
          <button onClick={signOut}>Logout</button>
        </div>
      }
    </div>
  );
}
