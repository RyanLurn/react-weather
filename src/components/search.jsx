function Search({ city, handleChange, handleSubmit }) {
  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        name="search"
        type="search"
        placeholder="Enter city name"
        value={city}
        onChange={handleChange}
        onKeyDown={e => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
