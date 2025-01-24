export const buildPaintDecorCode = (data: {
  Pavirsiai?: string;
  Apdaila?: string;
  custom?: string;
}) => {
  const pavirsiai =
    data.Pavirsiai && data.Pavirsiai !== "null"
      ? data.Pavirsiai.split(" - ")[0]
      : "";

  const apdaila =
    data.Apdaila && data.Apdaila !== "null"
      ? data.Apdaila.split(" - ")[0]
      : "";

  const custom =
    data.custom && data.custom !== "null"
      ? data.custom
      : "";

  // Logic to prioritize code generation
  if (custom) {
    // If custom code is entered, generate only custom code
    return pavirsiai ? `${pavirsiai}=${custom}` : custom;
  }

  if (apdaila) {
    // If Apdaila is selected, generate only Apdaila code
    return pavirsiai ? `${pavirsiai}=${apdaila}` : apdaila;
  }

  // Default case: if neither custom nor apdaila is provided
  return "";
};
