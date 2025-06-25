"use client";
import React, { useState, useEffect } from 'react';
import { getOptimizedImagePath } from '@/lib/utils';

interface OptImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const PLACEHOLDER = "/images/placeholder.svg";

const OptImage: React.FC<OptImageProps> = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(getOptimizedImagePath(src));
  const [triedFallback, setTriedFallback] = useState(false);
  const [triedPlaceholder, setTriedPlaceholder] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <img
      {...props}
      src={imgSrc}
      key={imgSrc}
      onError={e => {
        if (!triedFallback) {
          console.log('Falling back to original image:', src);
          setImgSrc(src);
          setTriedFallback(true);
        } else if (!triedPlaceholder) {
          console.log('Falling back to placeholder image');
          setImgSrc(PLACEHOLDER);
          setTriedPlaceholder(true);
        }
        if (props.onError) props.onError(e);
      }}
    />
  );
};

export default OptImage; 