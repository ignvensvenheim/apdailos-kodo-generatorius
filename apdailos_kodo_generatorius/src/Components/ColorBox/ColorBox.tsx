import ncsColor from "ncs-color";

// ncs-color convertion package that coverts ncs color code to hex or rgb color code.
// In my data color code is formatted like so - S0502-G50Y, but converter accepts values formatted as - NCS S 5020-G30Y
//

interface ColorBoxProps {
  ncsCode?: string; // The NCS color code (e.g., "S0502-G50Y")
}

function formatNcsCode(ncsCode: string): string {
  // Ensure the NCS code starts with "NCS" followed by a space
  if (!ncsCode.startsWith("NCS ")) {
    ncsCode = `NCS ${ncsCode}`;
  }

  return ncsCode.replace(/S(?! )/g, "S ");
}

function ColorBox({ ncsCode }: ColorBoxProps) {
  const formattedCode = ncsCode ? formatNcsCode(ncsCode) : null;

  let hexValue: string = "#FFFFFF"; // Default color
  let rgbValue: string = "rgb(255, 255, 255)";

  if (formattedCode) {
    try {
      hexValue = ncsColor.hex(formattedCode); // Convert to HEX
      rgbValue = ncsColor.rgb(formattedCode); // Convert to RGB
    } catch (error) {
      console.error(`Error converting code ${formattedCode}:`, error);
    }
  }

  return (
    <div
      style={{
        marginTop: "0.5rem",
        width: "100%",
        height: "100px",
        backgroundColor: hexValue,
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    ></div>
  );
}

export default ColorBox;
