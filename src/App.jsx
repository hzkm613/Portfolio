import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";
const Home = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
