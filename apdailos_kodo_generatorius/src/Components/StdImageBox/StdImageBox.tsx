import "./stdImageBox.css";

interface StdImageBoxProps {
  image: string;
}

const StdImageBox: React.FC<StdImageBoxProps> = ({ image }) => {
  return (
    <div
      className="stdImageBox"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default StdImageBox;
