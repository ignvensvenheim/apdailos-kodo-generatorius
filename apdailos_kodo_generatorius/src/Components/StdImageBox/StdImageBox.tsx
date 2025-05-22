import { useContextData } from "../../context/Context";
import "./stdImageBox.css";
import saveAs from "file-saver";

interface StdImageBoxProps {
  image: string;
  name: string;
}

const StdImageBox: React.FC<StdImageBoxProps> = ({ image, name }) => {
  const { lang } = useContextData();

  const downloadImage = (img: string, name: string) => {
    saveAs(img, `${name}.jpg`);
  };

  return (
    <div
      className="stdImageBox"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {image && (
        <button
          className="downloadImage"
          onClick={() => downloadImage(image, name)}
        >
          {lang === "lt" ? "Atsisiųsti paveikslėlį" : "Download image"}
        </button>
      )}
    </div>
  );
};

export default StdImageBox;
