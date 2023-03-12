import { Header, Footer } from "../components/index";

const Home = () => {
  return (
    <div className="home-page">
      <div className="first-view">
        <Header />
        <div className="trapizum">
          <div className="search-cars-field">
            <input placeholder="Find your loved car by make , model and keyword" />
            <button>
              <i className="serach-btn btn"></i> Search
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="second-view"></div>
      <div className="third-view"></div>
      <div className="fourth-view"></div>
      <Footer />
    </div>
  );
};

export default Home;
