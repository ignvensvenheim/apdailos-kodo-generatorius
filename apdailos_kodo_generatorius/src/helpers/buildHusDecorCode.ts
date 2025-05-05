export const buildHusDecorCode = (data: {
    Apdaila: string;
    Top: string;
    Bottom: string;
    Briaunos: string;
  }) => {
    const apdailaSelection = data.Apdaila && data.Apdaila !== "null" ? data.Apdaila : "";
  
    const percentageDate = apdailaSelection ? apdailaSelection : "";
  
    const topCode = data.Top.split(" - ")[0];
    const bottomCode = data.Bottom.split(" - ")[0];
    const briaunosCode = data.Briaunos.split(" - ")[0];
  
    const generatedCode = `${percentageDate}=${topCode}/${bottomCode}/${briaunosCode}`;
  
    return generatedCode;
  };
  