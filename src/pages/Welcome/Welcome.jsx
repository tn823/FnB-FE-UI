import "./Welcome.css";
import NavBar from "../../components/ui/navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect

const Welcome = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // State for current date/time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now); // Cập nhật thời gian hiện tại
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Định dạng ngày tháng và giờ phút theo chuẩn Việt Nam
  const formattedDate = currentDate.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <div className="creator h-screen">
        <div className="c-heading">
          <div className="c-heading__top">
            <h2 className="text-default">
              Site of the Day - {formattedDate} {formattedTime}
            </h2>
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
            Chào mừng bạn đến với cửa hàng! Đặt hàng ngay để trải nghiệm dịch vụ
            nhanh chóng và tiện lợi.
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
