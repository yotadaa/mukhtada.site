import { getServerAuthSession } from '@/app/auth'
import { redirect } from 'next/navigation'

export default async function CheckSession({ children }) {
    const session = await getServerAuthSession()
    if (!session || !session.user) {
        redirect('/api/auth/signin')
    }
    return (
        <>{children}</>
    )
}

export async function session() {
    const session = await getServerAuthSession();
    if (session) return session.user;
    return null;
}
