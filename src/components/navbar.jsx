// Stateless Functional Component
// const NavBar = (props) => {
const NavBar = ({ onReset, totalCount, total }) => {
  // console.log(total);
  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between">
      <div className="navbar-brand mb-0 h1">
        Counters
        <span className="badge badge-pill badge-info mx-2">
          {/* {props.totalCount} */}
          {totalCount}
        </span>
      </div>
      <div className="navbar-brand m-1">
        Total
        <span className="badge badge-pill badge-warning mx-2">
          {/* {props.totalCount} */}
          {total}
        </span>
      </div>
      <div className="mx-2">
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
