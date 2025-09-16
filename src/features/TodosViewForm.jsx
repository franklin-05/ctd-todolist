import React, { useState, useEffect } from 'react';

const TodosViewForm = ({ sortField, setSortField, sortDirection, setSortDirection, queryString, setQueryString }) => {
  const preventRefresh = (e) => {
    e.preventDefault();
  };
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500); 
    return () => clearTimeout(timer);
  }, [localQueryString, setQueryString]);

  const handleInputChange = (event) => {
    setLocalQueryString(event.target.value);
  };

  return (
    <form onSubmit={preventRefresh}>
      <div>
        <label htmlFor="search">Search todos:</label>
        <input 
          id="search"
          type="text" 
          value={localQueryString} // Use local state here
          onChange={handleInputChange} // Use the local handler
        />
        <button type="button" onClick={() => setLocalQueryString('')}>Clear</button> {/* Use local state here */}
      </div>
      <div>
        <label htmlFor="sortField">Sort by</label>
        <select 
          id="sortField" 
          value={sortField} 
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
      </div>
     <br/>
      <div>
        <label htmlFor="sortDirection">Direction</label>
        <select 
          id="sortDirection"
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
};

export default TodosViewForm;