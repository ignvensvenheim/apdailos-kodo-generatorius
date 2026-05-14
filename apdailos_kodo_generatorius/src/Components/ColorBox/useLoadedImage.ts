import { useEffect, useState } from "react";

interface LoadedImageState {
  isLoading: boolean;
  loadedImageUrl?: string;
}

export const useLoadedImage = (imageUrl?: string): LoadedImageState => {
  const [state, setState] = useState<LoadedImageState>({
    isLoading: false,
    loadedImageUrl: undefined,
  });

  useEffect(() => {
    if (!imageUrl) {
      setState({
        isLoading: false,
        loadedImageUrl: undefined,
      });
      return;
    }

    setState({
      isLoading: true,
      loadedImageUrl: undefined,
    });

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setState({
        isLoading: false,
        loadedImageUrl: imageUrl,
      });
    };

    image.onerror = () => {
      setState({
        isLoading: false,
        loadedImageUrl: undefined,
      });
    };
  }, [imageUrl]);

  return state;
};
