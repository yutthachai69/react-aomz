

function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-4 flex justify-between items-center">
            <h1 className="text-black font-bold">Mahatep</h1>
            <div className="flex justify-center gap-4">
            <button className="text-white bg-red-500 px-3 py-1 rounded">Logout</button>
            </div>
        
        </header>
    );
}

export default Header;
