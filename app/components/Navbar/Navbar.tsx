export function Navbar() {
    return (
        <nav className="w-full bg-white dark:bg-black border-b border-b-gray-400 dark:border-b-gray-800">
            <div className="container mx-auto p-5 flex justify-between items-center">
                <h2 className="text-2xl">Fakher Ghouili</h2>
                <div className="flex gap-2">
                    <button className="border-2 border-white text-white font-bold py-1 px-3 rounded-xl">
                        About me
                    </button>
                    <button className="border-2 border-white bg-white text-black font-black py-1 px-5 rounded-xl">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}
