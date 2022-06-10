function Menu()
{

    
      const plattformFilterOptions = ["all", "pc", "browser"];
      const addPlattformFilter = plattformFilterOptions.map((Add) => Add);
      const handlePlattformFilterChange = (e) =>
        plattformFilterOptions[e.target.value];
    
      const categoryFilterOptions = [
        "mmorpg",
        "shooter",
        "strategy",
        "action",
        "racing",
        "sports",
        "mmo",
        "survival",
        "social",
      ];
      const addCategoryFilter = categoryFilterOptions.map((Add) => Add);
      const handleCategoryFilterChange = (e) =>
        categoryFilterOptions[e.target.value];
    
      const sortingOptions = [
        "relevance",
        "release-date",
        "popularity",
        "alphabetical",
      ];
      const addSorting = sortingOptions.map((Add) => Add);
      const handleSortingChange = (e) => sortingOptions[e.target.value];

    return (
        <div className="menu">
          <h3>Free online Games</h3>
          <div className="selectionWrapper">
            <p>Sorting: </p>
            <select onChange={(e) => handleSortingChange(e)} className="select">
              {addSorting.map((sortingOptions, key) => (
                <option value={key}>{sortingOptions}</option>
              ))}
            </select>
            
            <p>Category: </p>
            <select
              onChange={(e) => handleCategoryFilterChange(e)}
              className="select"
            >
              {addCategoryFilter.map((categoryFilterOptions, key) => (
                <option value={key}>{categoryFilterOptions}</option>
              ))}
            </select>
            <p>Plattform: </p>
            <select
              onChange={(e) => handlePlattformFilterChange(e)}
              className="select"
            >
              {addPlattformFilter.map((plattformFilterOptions, key) => (
                <option value={key}>{plattformFilterOptions}</option>
              ))}
            </select>
          </div>
        </div>
      );
}

export default Menu;