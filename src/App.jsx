import { useState } from "react";
// import "./App.css";
import "./index.css";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  return (
    <>
      {/* <h1 className="border-2 border-green-900 text-green-500">BanChingoo</h1> */}

      <section className="flex">
        <section className='h-full w-6/12'>
          <Search />
        </section>
        <section className="h-full w-6/12">
          <Map />
        </section>
      </section>
    </>
  );
}

export default App;
