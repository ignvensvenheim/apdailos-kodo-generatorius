export const copyToClipboard = (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Kodas nukopijuotas");
    }
  };
  