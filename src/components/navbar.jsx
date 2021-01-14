// Stateless Functional Component
// const NavBar = (props) => {
const NavBar = ({ onReset, totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between">
      <div className="navbar-brand mb-0 h1">
        Counters
        <span className="badge badge-pill badge-secondary mx-2">
          {/* {props.totalCount} */}
          {totalCount}
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
