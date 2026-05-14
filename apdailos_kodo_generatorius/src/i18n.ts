import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  lt: {
    translation: {
      app: {
        title: "Apdailos generatoriai",
      },
      language: {
        label: "Kalba",
        english: "EN",
        lithuanian: "LT",
      },
      forms: {
        standardDecor: "STANDARTINĖS APDAILOS",
        paint: "DAŽYMAS",
        hus: "HUSEBY / FOSS",
      },
      fields: {
        surface: "Paviršiai",
        decor: "Apdaila",
        wood: "Mediena",
        glossiness: "Blizgumas",
        standardDecor: "Standartinė apdaila",
        useCustomColorCode: "Naudoti nestandartinį apdailos kodą",
        topSurface: "Viršutinis paviršius",
        bottomSurface: "Apatinis paviršius",
        edges: "Briaunos",
        customColorCode: "Nestandartinis apdailos kodas",
      },
      form: {
        husNote:
          "* pagal nurodytą apdailą, jei nenurodyta, tada apdaila gl.5",
        standardPaintGloss: "Standartinis dažų blizgumas - 30",
      },
      actions: {
        generateDecorCode: "Generuoti apdailos kodą",
        copyDecorCode: "Kopijuoti kodą",
        downloadImage: "Atsisiųsti paveikslėlį",
      },
      decorCode: {
        regenerate: "Spauskite 'Generuoti apdailos kodą'",
        selectProperties: "Pasirinkite savybes",
      },
      toast: {
        codeCopied: "Kodas nukopijuotas",
      },
      preview: {
        noImageAvailable: "Paveikslėlio nėra.",
      },
      rules: {
        abbreviations: "Sutrumpinimai etiketėse",
        husStructure: "Huseby/Foss kodo struktūra",
        decorStructure: "Apdailos kodo struktūra",
      },
      standardSurfaceWarning: {
        label: "Svarbu",
        intro:
          "*Standartiškai <strong>neapdailinami</strong> paviršiai:",
        paper: "Popierius",
        hpl: "HPL/CPL",
        linoleum: "Linoleumas",
        absEdge: "ABS briauna",
        holes: "Ertmės ir išfrezavimai",
      },
    },
  },
  en: {
    translation: {
      app: {
        title: "Decor generators",
      },
      language: {
        label: "Language",
        english: "EN",
        lithuanian: "LT",
      },
      forms: {
        standardDecor: "STANDARD DECOR",
        paint: "PAINT",
        hus: "HUSEBY / FOSS",
      },
      fields: {
        surface: "Surface",
        decor: "Decor",
        wood: "Wood",
        glossiness: "Glossiness",
        standardDecor: "Standard decor",
        useCustomColorCode: "Use custom color code",
        topSurface: "Top surface",
        bottomSurface: "Bottom surface",
        edges: "Edges",
        customColorCode: "Custom color code",
      },
      form: {
        husNote:
          "* according to decor selected, if not selected then decor is gl.5",
        standardPaintGloss: "Standard paint gloss - 30",
      },
      actions: {
        generateDecorCode: "Generate decor code",
        copyDecorCode: "Copy decor code",
        downloadImage: "Download image",
      },
      decorCode: {
        regenerate: "Press 'Generate decor code'",
        selectProperties: "Select properties",
      },
      toast: {
        codeCopied: "Code copied",
      },
      preview: {
        noImageAvailable: "No preview image.",
      },
      rules: {
        abbreviations: "Abbreviations in labels",
        husStructure: "Huseby/Foss code structure",
        decorStructure: "Decor code structure",
      },
      standardSurfaceWarning: {
        label: "Important",
        intro: "*Standard <strong>unfinished</strong> surfaces:",
        paper: "Paper",
        hpl: "HPL/CPL",
        linoleum: "Linoleum",
        absEdge: "ABS edge",
        holes: "Holes and routings",
      },
    },
  },
};

const setDocumentLanguage = (language: string) => {
  if (typeof document === "undefined") return;

  document.documentElement.lang = language;
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "lt",
    supportedLngs: ["lt", "en"],
    detection: {
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    setDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);
  });

i18n.on("languageChanged", (language) => {
  setDocumentLanguage(language);
});

export default i18n;
