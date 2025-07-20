import { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Enter city name"
        aria-label="Search"
        value={city}
        onChange={e => setCity(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            console.log(city);
            setCity("");
          }
        }}
      />
    </div>
  );
}

export default Search;
