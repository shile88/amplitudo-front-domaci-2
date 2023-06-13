import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <img src="../../src/assets/images/logo.svg" />
      <div className={classes.links}>
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
