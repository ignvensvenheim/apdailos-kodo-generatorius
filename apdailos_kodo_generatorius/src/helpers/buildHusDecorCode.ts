export const buildHusDecorCode = (data: {
    Apdaila: string;
    Top: string;
    Bottom: string;
    Briaunos: string;
  }) => {
    // Extracting the value from Apdaila (first FormSelect)
    const apdailaSelection = data.Apdaila && data.Apdaila !== "null" ? data.Apdaila : "";
  
    // If Apdaila has a valid selection (e.g., "3% 10.07.17"), use it as the first part
    const percentageDate = apdailaSelection ? apdailaSelection : "";
  
    // Extracting the selected values for the other fields (Top, Bottom, Briaunos)
    const topCode = data.Top.split(" - ")[0];
    const bottomCode = data.Bottom.split(" - ")[0];
    const briaunosCode = data.Briaunos.split(" - ")[0];
  
    // Combining everything into the desired format
    const generatedCode = `${percentageDate} ${topCode}/${bottomCode}/${briaunosCode}`;
  
    return generatedCode;
  };
  