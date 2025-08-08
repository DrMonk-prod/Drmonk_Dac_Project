import { Link } from "react-router";

function Logo() {
  return (
    <div className="logo flex items-center shrink-0 space-x-2 py-2 cursor-pointer">
      <div className="flex relative">
        <div className="delay-5000 absolute -top-4 left-20 h-8 w-8 animate-blob rounded-full bg-teal-600 opacity-90 blur-xl"></div>
        <div className="delay-2000 absolute left-5 top-4 h-8 w-8 animate-blob rounded-full bg-rose-500 opacity-90 blur-xl"></div>

        <Link to={"/"} className="flex items-center font-chillax">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Find <span className="text-rose-500">Dr+ </span>
            <span className="text-sm rounded-full py-1 px-4 bg-zinc-800 text-slate-200 font-medium">
              Dashboard
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
