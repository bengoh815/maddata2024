import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="m-5 text-2xl font-bold">Contact us</h1>
      <div className="h-3/4 text-lg flex justify-center">
        <div className="h-1/2 w-1/2 text-center">
          <p>
            Check out our{" "}
            <a
              href="https://github.com/ArjSan1/maddata"
              className="hover:text-blue-700"
            >
              Git Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
