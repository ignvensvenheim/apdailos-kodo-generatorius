import ncsColor from "ncs-color";

const DEFAULT_COLOR = "#FFFFFF";

const DECOR_COLOR_RULES = [
  {
    keywords: ["juoda", "black"],
    color: "#2f3136",
  },
  {
    keywords: ["balinta", "whitened", "balinimas", "skaidriai", "clear"],
    color: "#f2ede2",
  },
  {
    keywords: ["pilka", "grey"],
    color: "#8f949b",
  },
  {
    keywords: ["žalia", "zalia", "green"],
    color: "#7e9f8c",
  },
  {
    keywords: ["ruda", "brown", "walnut", "teak"],
    color: "#7b5a46",
  },
  {
    keywords: ["vintage"],
    color: "#8a735d",
  },
  {
    keywords: ["nero"],
    color: "#4c4c46",
  },
  {
    keywords: ["oak auster", "stone"],
    color: "#a89b8a",
  },
  {
    keywords: ["gratonet"],
    color: "#6f6257",
  },
];

export const extractNcsCode = (colorCode: string) => {
  const match = colorCode.match(/S\s?\d{4}-[A-Z]\d{0,2}[A-Z]?/i);

  if (!match) {
    return null;
  }

  const normalizedCode = match[0].toUpperCase();
  const codeWithPrefix = normalizedCode.startsWith("NCS ")
    ? normalizedCode
    : `NCS ${normalizedCode}`;

  return codeWithPrefix.replace(/S(?! )/g, "S ");
};

export const inferDecorColor = (colorCode: string) => {
  const normalizedCode = colorCode.toLowerCase();

  const matchingRule = DECOR_COLOR_RULES.find((rule) =>
    rule.keywords.some((keyword) => normalizedCode.includes(keyword)),
  );

  return matchingRule?.color ?? DEFAULT_COLOR;
};

export const resolveColorBoxBackground = (
  colorCode?: string,
  showColorFallback = true,
) => {
  if (!showColorFallback || !colorCode) {
    return DEFAULT_COLOR;
  }

  const formattedCode = extractNcsCode(colorCode);

  if (formattedCode) {
    try {
      return ncsColor.hex(formattedCode);
    } catch (error) {
      console.error(`Error converting code ${formattedCode}:`, error);
    }
  }

  return inferDecorColor(colorCode);
};
