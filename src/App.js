import { Route } from "react-router-dom";

// import classes from "./App.module.css";
import PotoMain from "./pages/PotoMain";
import WhiteList from "./pages/WhiteList";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <PotoMain />
      </Route>
      <Route path="/whitelist">
        <WhiteList />
      </Route>
    </div>
  );
}

export default App;
