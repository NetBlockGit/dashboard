import React from "react";
import "./App.css";

import Card from "./Component/Card/Card";
import SearchBar from "./Component/Search/SearchBar";
import "./api/index";

function App() {
  return (
    // <SearchBar placeholder="Search" />;
    <Card
      place="you control your Blocklist,no one else can, not even pro hacker"
      placeholder="Control of Blocklist"
      color="#a020f0"
    />
  );
}

export default App;
