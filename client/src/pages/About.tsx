import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="m-5 text-2xl font-bold">About us</h1>
      <div className="h-3/4 text-lg flex justify-center">
        <div className="h-1/2 w-1/2 text-center">
          <p>
            We are currently engaged in a project aimed at forecasting future
            trends in agricultural commodity markets. By leveraging
            sophisticated analyses of weather data and crop yields, we seek to
            unravel the intricate dynamics that govern market fluctuations. Our
            goal is to gain a deeper understanding of how these factors
            interplay, ultimately enabling us to make informed predictions about
            future market trends
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
