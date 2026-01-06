function Input() {
  return (
    <>
      {/* <!-- Search Section --> */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name"
        />
        <button className="search-btn">
          <i className="fa fa-search"></i>
          Get Weather
        </button>
      </div>
    </>
  );
}

export default Input;
