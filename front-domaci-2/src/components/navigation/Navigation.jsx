import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src="../../src/assets/images/logo.svg" />
      <div className="nav__links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">StartUP</a>
        <a href="#">Career</a>
        <a href="#">Company</a>
        <a href="#">Blog</a>
      </div>
      <button>CG</button>
    </nav>
  );
};
