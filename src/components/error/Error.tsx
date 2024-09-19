import "./style/Error.css";

interface ErrorProps {
  message: string; // Khai báo kiểu của message là chuỗi
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-message">Error: {message}</p>
    </div>
  );
};

export default Error;
