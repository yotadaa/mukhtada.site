'use client';

import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function SessionUtility({ children, session }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

SessionUtility.getInitialProps = async ({ ctx }) => {
    const session = await getSession(ctx);
    return { session };
};