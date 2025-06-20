import { Search } from "lucide-react";
import { MapClientWrapper } from "@/components/map-wrapper";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <nav className="absolute z-40 flex w-full flex-row items-center justify-between bg-[#4A162F] px-3 py-2">
                <div className="h-3 w-20 bg-black" />
                <div className="flex w-100 flex-row justify-between">
                    <Link href="/" className="text-white">
                        Mapa
                    </Link>
                    <Link href="/" className="text-white">
                        Contribuye
                    </Link>
                    <Link href="/" className="text-white">
                        ¿Qué es esto?
                    </Link>
                </div>
                <div className="h-10 w-10 rounded-full bg-white shadow-lg" />
            </nav>
            <div className="absolute bottom-[12.5%] left-1/5 z-40 flex min-w-[33%] items-center space-x-3 rounded-lg bg-white px-3 py-2 shadow-lg sm:left-1/3 lg:left-1/3">
                <Search color="black" size={20} />
                <input
                    className="w-full text-sm focus:outline-none"
                    type="text"
                    placeholder="¿Dónde ocurrió?"
                    maxLength={255}
                />
            </div>

            <MapClientWrapper />
        </div>
    );
}
