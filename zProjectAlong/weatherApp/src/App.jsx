import SearchBox from "./components/weatherAppComp/SearchBox";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-700 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Weather App
        </h1>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
