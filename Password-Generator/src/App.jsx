// import { useCallback, useEffect, useState, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(6);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*/?";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);
//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//         <h1 className="text-white text-center my-3">Password generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//           >
//             copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Password Generator
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>

          <div className="relative group mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative flex rounded-lg overflow-hidden">
              <input
                type="text"
                value={password}
                className="flex-1 bg-slate-800/80 text-white px-4 py-3 outline-none font-mono text-sm placeholder-slate-400 border-0"
                placeholder="Generated password will appear here..."
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-slate-300 font-medium">
                  Password Length
                </label>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg">
                  {length}
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <style jsx>{`
                  .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
                    cursor: pointer;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                  }
                  .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                  }
                `}</style>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    className="sr-only"
                    onChange={() => {
                      setNumberAllowed((prev) => !prev);
                    }}
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                      numberAllowed
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent"
                        : "border-slate-400 bg-transparent"
                    }`}
                  >
                    {numberAllowed && (
                      <svg
                        className="w-3 h-3 text-white absolute top-0.5 left-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  Numbers
                </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    className="sr-only"
                    onChange={() => {
                      setCharAllowed((prev) => !prev);
                    }}
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                      charAllowed
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent"
                        : "border-slate-400 bg-transparent"
                    }`}
                  >
                    {charAllowed && (
                      <svg
                        className="w-3 h-3 text-white absolute top-0.5 left-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  Symbols
                </span>
              </label>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={passwordGenerator}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Generate New Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;