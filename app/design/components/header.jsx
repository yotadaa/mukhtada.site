import { IoSettingsOutline } from "react-icons/io5";


export default function Header() {
    return (
        <nav className="p-2 px-4 flex w-full justify-between items-center">
            <section className="flex items-center gap-3 text-xl font-semibold h-full px-5">
                Nebulify
            </section>
            <section className="flex items-center gap-3">
                <div className="h-[40px] w-[40px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-md">
                </div>
            </section>
        </nav>
    );
}