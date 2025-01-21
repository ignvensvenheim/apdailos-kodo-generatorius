export const buildPaintDecorCode = (data: {
    Pavirsiai?: string;
    Apdaila?: string;
}) => {
    const pavirsiai =
      data.Pavirsiai && data.Pavirsiai !== "null"
        ? data.Pavirsiai.split(" - ")[0]
        : "";
    const apdaila =
      data.Apdaila && data.Apdaila !== "null"
        ? data.Apdaila.split(" - ")[0]
        : "";
  
    let generatedCode = "";
  
    if (apdaila) {
      generatedCode = pavirsiai ? `${pavirsiai}=${apdaila}` : apdaila;
    }
  
    return generatedCode;
  };
  