import { useState } from "react";
function Search() {
  const [enabled, setEnabled] = useState(false);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <div className="flex align-middle">
        <p
          className={`${enabled ? "text-white" : "text-blue-500"} text-xl mx-2`}
        >
          C
        </p>
        <label className=" relative items-center  cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-blue-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-400"
          ></div>
        </label>

        <p
          className={`${enabled ? "text-red-600" : "text-white"} text-xl mx-2`}
        >
          F
        </p>
      </div>
      <form
        className="flex
      justify-center"
        onSubmit={handleSubmit}
      >
        <button
          className=" bg-gray-300 py-2 px-3 rounded-s-3xl border-e border-gray-400 hover:bg-gray-400 transition-all"
          type="submit"
        >
          <img src="/src/images/icon _search_.png" alt="search" />
        </button>
        <input
          placeholder="Search location..."
          className="px-2 bg-gray-300 text-2xl text-gray-600 w-600 rounded-e-3xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
