import { toast } from "react-toastify";

export const copyToClipboard = (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Kodas nukopijuotas!");
    }
  };
  