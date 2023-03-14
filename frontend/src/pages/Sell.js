import { Header, Footer } from "../components/index";
import Search from "../components/Search";

const Sell = () => {
  return (
    <div className="sell-page">
      <div className="first-view">
        <Header />
        <Search />
      </div>
      <div className="second-view"></div>
      <div className="third-view"></div>
      <div className="fourth-view"></div>
      <Footer />
    </div>
  );
};

export default Sell;
