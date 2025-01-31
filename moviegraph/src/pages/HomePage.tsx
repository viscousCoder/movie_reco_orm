import HomeComponent from "../component/HomeComponent.tsx";
import TopCarosuel from "../component/Header/TopCarosuel.tsx";
import { Fragment } from "react";

/**Home page */
const HomePage = () => {
  return (
    <Fragment>
      <TopCarosuel />
      <HomeComponent />
    </Fragment>
  );
};

export default HomePage;
