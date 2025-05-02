interface StdImageBoxProps {
  image: string;
}

const StdImageBox: React.FC<StdImageBoxProps> = ({ image }) => {
  return (
    <div
      style={{
        marginTop: "0.5rem",
        width: "100%",
        height: "100px",
        background: `url(${image})`,
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    ></div>
  );
};

export default StdImageBox;
