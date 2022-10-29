import React, { Suspense } from "react";

import { Route } from "react-router-dom";

// import classes from "./App.module.css";
// import PotoMain from "./pages/PotoMain";
// import WhiteList from "./pages/WhiteList";

const PotoMain = React.lazy(() => import("./pages/PotoMain"));
const WhiteList = React.lazy(() => import("./pages/WhiteList"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Route path="/" exact>
          <PotoMain />
        </Route>
        <Route path="/whitelist">
          <WhiteList />
        </Route>
      </Suspense>
    </div>
  );
}

export default App;
