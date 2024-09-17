import LogoutButton from "../pages/Logout";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-4 flex justify-between items-center">
      <h1 className="text-black font-bold">Mahatep</h1>

      <div className="flex justify-center gap-4">
        <LogoutButton className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-6 rounded-full hover:from-red-600 hover:to-red-800 transition duration-300 ease-in-out shadow-xl transform hover:scale-105" />
      </div>
    </header>
  );
}

export default Header;
