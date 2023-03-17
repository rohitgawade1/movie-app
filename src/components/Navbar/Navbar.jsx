import './Navbar.css';

export const Navbar = ({movies, setMovies, constData}) => {
  // console.log(movie)
  // const copyMovie = movie
  const handleSearch = (e) => {
      let filteredMovies = constData.filter((movie) => {
          return movie.name.includes(e.target.value)
      })
      // console.log(filteredMovies)
      setMovies(filteredMovies)

  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MovieApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearch(e)}
            />
            <button className="btn btn-outline-light" >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
