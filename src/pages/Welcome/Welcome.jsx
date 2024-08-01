import "./Welcome.css";
import NavBar from "../../components/ui/navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect

const Welcome = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // State for current date/time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const ictOffset = 7 * 60; // ICT timezone offset in minutes
      const ictTime = new Date(now.getTime() + ictOffset * 60 * 1000);
      setCurrentDate(ictTime);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <>
      <div className="creator h-screen">
        <div className="c-heading">
          <div className="c-heading__top">
            <h2 className="text-default">Site of the Day - {formattedDate}</h2>
          </div>
          <div className="c-heading__middle">
            <h1 className="heading-1">
              <a href="/home" target="_blank" rel="noopener noreferrer">
                Fast{" "}
                <mark className="rounded-md bg-white-100 text-orange-500 hover:bg-orange-500 hover:text-yellow-50">
                  Food
                </mark>
              </a>
            </h1>
          </div>
          <div className="c-heading__bottom text-lg">
            as well know and we are very busy all days advice you. Advice you to
            call us of before arriving
          </div>
        </div>
        <div className="center-button">
          <Link
            to="home"
            className="button-container rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white-100"
          >
            ORDER NOW!
          </Link>
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Welcome;
