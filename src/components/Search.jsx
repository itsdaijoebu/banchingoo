function Search() {
  return (
    <>
      <section className="p-4">
        <label htmlFor="searchbar" className="pr-2">
          Search
        </label>
        <input
          name="searchbar"
          type="text"
          className="border-2 border-green-800"
        />
      </section>
    </>
  );
}

export default Search;
