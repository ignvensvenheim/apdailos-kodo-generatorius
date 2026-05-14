export  const buildStdDecorCode = (data: {
    Pavirsiai: string;
    Apdaila: string;
    Blizgumas: string;
  }) => {
    const pavirsiai =
      data.Pavirsiai && data.Pavirsiai !== "null"
        ? data.Pavirsiai.split(" - ")[0]
        : "";
    const apdaila =
      data.Apdaila && data.Apdaila !== "null"
        ? data.Apdaila.split(" - ")[0]
        : "";
    const blizgumas =
      data.Blizgumas && data.Blizgumas !== "null" ? data.Blizgumas : "";

    let generatedCode = "";

    if (pavirsiai && apdaila) {
      generatedCode = `${pavirsiai}=${apdaila}`;
      if (blizgumas) {
        generatedCode += ` ${blizgumas}`;
      }
    } else if (apdaila) {
      generatedCode = apdaila;
      if (blizgumas) {
        generatedCode += ` ${blizgumas}`;
      }
    } else if(pavirsiai && blizgumas){
      generatedCode =`${pavirsiai}=${blizgumas}`
    } else if (blizgumas) {
      generatedCode = blizgumas;
    }

    return(generatedCode);
  };