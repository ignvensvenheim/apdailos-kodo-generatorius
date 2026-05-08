import "./stdImageBox.css";
import saveAs from "file-saver";
import { useTranslation } from "react-i18next";

interface StdImageBoxProps {
  image: string;
  name: string;
}

function StdImageBox({ image, name }: StdImageBoxProps) {
  const { t } = useTranslation();

  const downloadImage = (img: string, fileName: string) => {
    saveAs(img, `${fileName}.jpg`);
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
          {t("actions.downloadImage")}
        </button>
      )}
    </div>
  );
}

export default StdImageBox;
