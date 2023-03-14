import { Footer, Header } from "../components";
import Search from "../components/Search";

const SavedCars = () => {
  return (
    <div className="saved-page">
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

export default SavedCars;
