import "./colorBox.css";
import { resolveColorBoxBackground } from "./colorBoxUtils";
import { useLoadedImage } from "./useLoadedImage";

interface ColorBoxProps {
  colorCode?: string;
  imageUrl?: string;
  showColorFallback?: boolean;
  noImageMessage?: string;
}

function ColorBox({
  colorCode,
  imageUrl,
  showColorFallback = true,
  noImageMessage,
}: ColorBoxProps) {
  const { isLoading, loadedImageUrl } = useLoadedImage(imageUrl);
  const backgroundColor = resolveColorBoxBackground(
    colorCode,
    showColorFallback,
  );
  const showEmptyState = !isLoading && !loadedImageUrl && !!noImageMessage;

  return (
    <div className="colorBox" style={{ backgroundColor }}>
      {loadedImageUrl ? (
        <>
          <img
            className="colorBoxImage"
            src={loadedImageUrl}
            alt=""
            aria-hidden="true"
          />
          <div className="colorBoxOverlay" />
        </>
      ) : null}

      {isLoading ? (
        <div className="colorBoxLoader" aria-hidden="true">
          <span className="colorBoxSpinner" />
        </div>
      ) : null}

      {showEmptyState ? (
        <div className="colorBoxEmptyState">{noImageMessage}</div>
      ) : null}
    </div>
  );
}

export default ColorBox;
