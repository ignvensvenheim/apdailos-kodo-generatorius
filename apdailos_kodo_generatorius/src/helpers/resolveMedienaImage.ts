const LOCAL_IMAGE_DIRECTORY = "/mediena-images/";
const REMOTE_URL_PATTERN = /^https?:\/\//i;

function normalizeLocalImagePath(image: string): string {
  const trimmedImage = image.trim().replace(/\\/g, "/");
  const withoutLeadingSlash = trimmedImage.replace(/^\/+/, "");

  if (
    withoutLeadingSlash === "" ||
    withoutLeadingSlash.includes("..") ||
    withoutLeadingSlash.toLowerCase().startsWith("file:/")
  ) {
    return "";
  }

  if (withoutLeadingSlash.startsWith("mediena-images/")) {
    return `/${withoutLeadingSlash}`;
  }

  return `${LOCAL_IMAGE_DIRECTORY}${withoutLeadingSlash}`;
}

export function resolveMedienaImage(image?: string): string {
  if (!image) {
    return "";
  }

  const trimmedImage = image.trim();

  if (REMOTE_URL_PATTERN.test(trimmedImage)) {
    return trimmedImage;
  }

  return normalizeLocalImagePath(trimmedImage);
}

