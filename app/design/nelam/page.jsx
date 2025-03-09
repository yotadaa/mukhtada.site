import Header from "./components/header";
import { Skeleton } from "./utilities";

export default function Home() {

    return (
        <>
            <Header />
            <main className="px-2 w-full h-screen">
                <section className="bg-slate-50 w-full h-full rounded-xl">
                    <header className="w-full flex justify-center items-center p-2">
                        <ul className="flex gap-10 py-2">
                            <li>Explore Pics</li>
                            <li>Story</li>
                            <li>Explore Sounds</li>
                        </ul>
                    </header>
                    <div className="w-full flex justify-center items-center p-2">
                        how you doinn
                    </div>
                    <section>
                        <Skeleton className="h-10 w-10"></Skeleton>
                    </section>
                </section>
            </main>
        </>
    )
}