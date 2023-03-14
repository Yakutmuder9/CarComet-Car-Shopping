import { useRef, useState } from "react";
import { Header, Footer } from "../components/index";
import { circlebtn, car18, Icon1 } from "../assets/images/index";
import Search, { PlateForm, MakeForm, VINForm } from "../components/Search";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabNames = ["By plate", " By VIN", "Ny make"];
  const tablistRef = useRef(null);
  const [FeatureCar, useFeatureCar] = useState([1, 2]);

  const handleTabClick = (index) => {
    tablistRef.current.classList.add("popout");
    setActiveTab(index);
  };

  return (
    <div className="home-page">
      <div className="first-view">
        <Header />
        <Search />
      </div>

      <div className="second-view">
        <div className="home-txt">
          <h2>Get ready to hit the road instyle with top-quality cars.</h2>
        </div>

        <div className="action-with-cars">
          <img src={circlebtn} alt="" className="circle-img" />
        </div>
        <div className="used-car-real-offer">
          <div className="container">
            <h2>Get Real Offer</h2>
            <div className="field-container">
              {tabNames.map((tabName, index) => (
                <div
                  key={index}
                  className="card-box btn"
                  style={{
                    border: activeTab === index + 1 ? "2px solid #FFD31C" : "",
                  }}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {tabName}
                </div>
              ))}
            </div>

            <h3>Let's Get Choose</h3>
            <p>All the fild with * are required</p>
            <div className="selected-field" ref={tablistRef}>
              {activeTab === 1 && <PlateForm />}
              {activeTab === 2 && <VINForm />}
              {activeTab === 3 && <MakeForm />}
            </div>
          </div>
        </div>
      </div>
      <div className="third-view">
        <div className="container">
          <h2>Future Upcomming Cars</h2>
          <div className="card-container">
            {FeatureCar?.map((car) => {
              return (
                <div className="car-card">
                  <img src="https://images.pexels.com/photos/11320569/pexels-photo-11320569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <div className="card-txt">
                    <h4>2023 MAZDA CX_5</h4>
                    <p>Learn More ..</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fourth-view">
        <h1 >Affordable Cars Available Now</h1>
        <div className="container">
          <div className="affordable-car-txt">
            <h4>AFFORD THE CAR YOU WANT</h4>
            <p>
              {" "}
              Browse our unbeatable selection of vehicles and find the perfect
              match for your style and budget!
            </p>
            <p>
              {" "}
              Rev up your sales game and accelerate your journey to the perfect
              ride with our sleek and user-friendly car selling website
            </p>
            <p>
              {" "}
              Get ready to hit the road in style with our unbeatable selection
              of top-quality cars.
            </p>
          </div>
          <div className="affordable-car-img">
            <img src={car18} alt="" />
          </div>
        </div>
      </div>
      <div className="fivth-view">
        <div className="fivth-header container">
          <h1>All the ways to find car chemistry list and describe all</h1>
          <p>
            We're your one-stop shop for buying and selling your car. Get
            matched to your perfect car, or sell one swiftly.
          </p>
        </div>

        <div className="container">
          <div className="research-car-txt">
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Online search</h1>
                <p>
                  You can find a car chemistry list by doing a simple online
                  search. There are various websites and forums that provide
                  information on car chemistry, including the chemical
                  composition of different car parts and fluids.{" "}
                </p>
                <a href="#">Find Online search</a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Car repair manuals</h1>
                <p>
                  Car repair manuals are another great resource for finding
                  information on car chemistry. These manuals provide detailed
                  information on the workings of various car parts and their
                  chemical composition.{" "}
                </p>
                <a href="#">Search Car repair manuals</a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Automotive textbooks</h1>
                <p>
                  Automotive textbooks can be used to find information on car
                  chemistry as well. These textbooks are typically used in
                  automotive technology courses and provide in-depth information
                  on car mechanics and chemistry.
                </p>
                <a href="#">Find Automotive textbooks</a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Manufacturer's websites</h1>
                <p>
                  Car manufacturers often provide detailed information on the
                  chemistry of their vehicles on their websites. This
                  information may include the chemical composition of various
                  car parts, the type of fluids used in the car, and any
                  potential chemical hazards associated with the vehicle.
                </p>
                <a href="#"></a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Automotive magazines</h1>
                <p>
                  Automotive magazines like Car and Driver, Motor Trend, and
                  Road & Track often feature articles on car chemistry. These
                  articles can provide a wealth of information on the chemical
                  composition of cars and their various components.
                </p>
                <a href="#">Find Automotive magazines</a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Automotive forums</h1>
                <p>
                  Automotive forums can be a great resource for finding
                  information on car chemistry. These forums are typically
                  populated by automotive enthusiasts and professionals who can
                  provide detailed information on car chemistry and mechanics.
                </p>
                <a href="#">Fill Automotive forums</a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Automotive experts</h1>
                <p>
                  {" "}
                  Finally, you can seek out the advice of automotive experts to
                  learn more about car chemistry. These experts may include
                  mechanics, engineers, and other professionals who have
                  specialized knowledge of car chemistry and mechanics.
                </p>
                <a href="#">Find Automotive experts</a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Online search</h1>
                <p>
                  You can find a car chemistry list by doing a simple online
                  search. There are various websites and forums that provide
                  information on car chemistry, including the chemical
                  composition of different car parts and fluids.{" "}
                </p>
                <a href="#"></a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={Icon1} alt="" />
              </div>
              <div className="card-body">
                <h1>Online search</h1>
                <p>
                  You can find a car chemistry list by doing a simple online
                  search. There are various websites and forums that provide
                  information on car chemistry, including the chemical
                  composition of different car parts and fluids.{" "}
                </p>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
