import "./App.css";

import { Redirect, Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/">
        <Landing />
      </Route>
    </>
  );
}

export default App;
