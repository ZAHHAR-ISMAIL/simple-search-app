import { useState } from "react";
import ListItems from "./ListItems";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const items = ["smartphone", "tech news", "alpha a", "alpha b", "smartcity"];

  return (
    <div>
      <ListItems items={items} onFilter={handleFilter} />
      <p>Search term: {searchTerm}</p>
    </div>
  );
}

export default App;
