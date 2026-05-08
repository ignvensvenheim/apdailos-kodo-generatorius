import { useEffect, useState } from "react";
import ncsColor from "ncs-color";
import "./colorBox.css";

// ncs-color convertion package that coverts ncs color code to hex or rgb color code.
// In my data color code is formatted like so - S0502-G50Y, but converter accepts values formatted as - NCS S 5020-G30Y
//

interface ColorBoxProps {
  colorCode?: string;
  imageUrl?: string;
  showColorFallback?: boolean;
}

function extractNcsCode(colorCode: string): string | null {
  const match = colorCode.match(/S\s?\d{4}-[A-Z]\d{0,2}[A-Z]?/i);

  if (!match) {
    return null;
  }

  let ncsCode = match[0].toUpperCase();

  if (!ncsCode.startsWith("NCS ")) {
    ncsCode = `NCS ${ncsCode}`;
  }

  return ncsCode.replace(/S(?! )/g, "S ");
}

function inferDecorColor(colorCode: string): string {
  const normalized = colorCode.toLowerCase();

  if (normalized.includes("juoda") || normalized.includes("black")) {
    return "#2f3136";
  }

  if (
    normalized.includes("balinta") ||
    normalized.includes("whitened") ||
    normalized.includes("balinimas") ||
    normalized.includes("skaidriai") ||
    normalized.includes("clear")
  ) {
    return "#f2ede2";
  }

  if (normalized.includes("pilka") || normalized.includes("grey")) {
    return "#8f949b";
  }

  if (normalized.includes("žalia") || normalized.includes("zalia") || normalized.includes("green")) {
    return "#7e9f8c";
  }

  if (normalized.includes("ruda") || normalized.includes("brown") || normalized.includes("walnut") || normalized.includes("teak")) {
    return "#7b5a46";
  }

  if (normalized.includes("vintage")) {
    return "#8a735d";
  }

  if (normalized.includes("nero")) {
    return "#4c4c46";
  }

  if (normalized.includes("oak auster") || normalized.includes("stone")) {
    return "#a89b8a";
  }

  if (normalized.includes("gratonet")) {
    return "#6f6257";
  }

  return "#ffffff";
}

function ColorBox({
  colorCode,
  imageUrl,
  showColorFallback = true,
}: ColorBoxProps) {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loadedImageUrl, setLoadedImageUrl] = useState<string>();
  const formattedCode = colorCode ? extractNcsCode(colorCode) : null;

  useEffect(() => {
    if (!imageUrl) {
      setIsImageLoading(false);
      setLoadedImageUrl(undefined);
      return;
    }

    setIsImageLoading(true);

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setLoadedImageUrl(imageUrl);
      setIsImageLoading(false);
    };

    image.onerror = () => {
      setLoadedImageUrl(undefined);
      setIsImageLoading(false);
    };
  }, [imageUrl]);

  let hexValue = "#FFFFFF";

  if (showColorFallback && formattedCode) {
    try {
      hexValue = ncsColor.hex(formattedCode);
    } catch (error) {
      console.error(`Error converting code ${formattedCode}:`, error);
    }
  } else if (showColorFallback && colorCode) {
    hexValue = inferDecorColor(colorCode);
  }

  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: hexValue,
        backgroundImage: loadedImageUrl ? `url(${loadedImageUrl})` : undefined,
        backgroundSize: loadedImageUrl ? "cover" : undefined,
        backgroundPosition: loadedImageUrl ? "center" : undefined,
        backgroundRepeat: loadedImageUrl ? "no-repeat" : undefined,
      }}
    >
      {isImageLoading ? (
        <div className="colorBoxLoader" aria-hidden="true">
          <span className="colorBoxSpinner" />
        </div>
      ) : null}
      {loadedImageUrl ? <div className="colorBoxOverlay" /> : null}
    </div>
  );
}

export default ColorBox;
