import "./App.css";

import { Redirect, Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";
import Input from "./pages/Input";
import ListingContainer from "./components/ListingContainer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <svg
        style={{
          zIndex: "1",
          position: "fixed",
          left: 0,
        }}
        width="1437"
        height="628"
        viewBox="0 0 1437 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M406.5 314C311 314 156 356 0.5 278.5V628H1437V-3.05176e-05C1374 -2.57492e-05 1225.5 10.7994 1137.5 24.5C1049.5 38.2006 820 144.5 731.5 201C643 257.5 502 314 406.5 314Z"
          fill="#FAD5A2"
        />
      </svg>
      <div style={{ zIndex: "10", position: "relative" }}>
        <Navbar />
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/event">
            <Input />
          </Route>
          <Route path="/test">
            <ListingContainer />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
