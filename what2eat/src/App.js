import "./App.css";

import { Redirect, Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/test">
        <Listing />
      </Route>
    </>
  );
}

export default App;
