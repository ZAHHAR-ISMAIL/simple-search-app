import React, { useMemo, useState } from "react";
import "./ListItems.css";

const ListItems = ({ items, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onFilter(searchTerm);
  };

  return (
    <div>
      <div className="top">
        <input
          className="search-box"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="article-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="article-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
