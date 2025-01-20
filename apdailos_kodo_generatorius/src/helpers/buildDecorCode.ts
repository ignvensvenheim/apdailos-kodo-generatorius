export  const buildDecorCode = (data: {
    Pavirsiai: string;
    Apdaila: string;
    Blizgumas: string;
  }) => {
    const paviršiai =
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

    if (paviršiai && apdaila) {
      generatedCode = `${paviršiai}=${apdaila} ${blizgumas}`;
    } else if (blizgumas) {
      generatedCode = `${blizgumas}`;
    }

    return(generatedCode);
  };