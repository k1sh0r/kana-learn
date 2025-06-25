// components/OptimizedImage.js
// This file contains the React components for using optimized images
"use client";
import { useState, useEffect } from 'react';

// Types for manifest
interface ImageFormatData {
  [width: string]: string; // e.g. '320': '/optimized/foo-320w.webp'
}

interface ImageManifestEntry {
  [format: string]: ImageFormatData; // e.g. 'webp', 'jpeg'
}

interface ImageManifest {
  [imageName: string]: ImageManifestEntry;
}

// Custom hook for optimized images
type PreferredFormat = 'webp' | 'jpeg' | string;

export function useOptimizedImage(
  imageName: string,
  preferredFormat: PreferredFormat = 'webp'
): {
  loading: boolean;
  getImageSrc: (width?: string) => string;
  getSrcSet: () => string;
  isAvailable: boolean;
} {
  const [manifest, setManifest] = useState<ImageManifest | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadManifest = async () => {
      try {
        const response = await fetch('/optimized/manifest.json');
        const data = await response.json();
        setManifest(data);
      } catch (error) {
        console.error('Failed to load image manifest:', error);
      } finally {
        setLoading(false);
      }
    };

    loadManifest();
  }, []);

  const getImageSrc = (width: string = 'original'): string => {
    if (!manifest || !manifest[imageName]) {
      return `/images/${imageName}.jpg`;
    }
  
    const imageData = manifest[imageName];
    
    // PRIORITY ORDER: Always try WebP first, then fallback
    const formatPriority = ['webp', 'jpeg', 'png'];
    
    for (const format of formatPriority) {
      if (imageData[format] && imageData[format][width]) {
        return imageData[format][width];
      }
    }
  
    // If specific width not found, try original size with WebP first
    for (const format of formatPriority) {
      if (imageData[format] && imageData[format]['original']) {
        return imageData[format]['original'];
      }
    }
  
    return `/images/${imageName}.jpg`;
  };
  

  const getSrcSet = (): string => {
    if (!manifest || !manifest[imageName]) {
      return '';
    }

    const imageData = manifest[imageName];
    const format = imageData[preferredFormat] || Object.values(imageData)[0];
    
    if (!format) return '';

    // Only use 640w and 1280w for srcSet
    const allowedSizes = ['640', '1280'];
    const srcSetEntries = Object.entries(format)
      .filter(([size]) => allowedSizes.includes(size))
      .map(([size, url]) => `${url} ${size}w`)
      .sort((a, b) => {
        const sizeA = parseInt(a.split(' ')[1]);
        const sizeB = parseInt(b.split(' ')[1]);
        return sizeA - sizeB;
      });

    return srcSetEntries.join(', ');
  };

  return {
    loading,
    getImageSrc,
    getSrcSet,
    isAvailable: !loading && !!(manifest && manifest[imageName])
  };
}

// Simple optimized image component
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  preferredFormat?: PreferredFormat;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  sizes = '100vw',
  priority = false,
  className = '',
  preferredFormat = 'webp',
  ...props 
}: OptimizedImageProps) {
  const imageName = src.replace(/^.*\//, '').replace(/\.[^/.]+$/, '');
  const { loading, getImageSrc, getSrcSet } = useOptimizedImage(imageName, preferredFormat);

  if (loading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        {...props}
      />
    );
  }

  const srcSet = getSrcSet();
  const imageSrc = getImageSrc();

  return (
    <img
      src={imageSrc}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}

// Picture element with format fallbacks
interface ResponsivePictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  className?: string;
}

export function ResponsivePicture({ 
  src, 
  alt, 
  width, 
  height, 
  sizes = '100vw',
  className = '',
  ...props 
}: ResponsivePictureProps) {
  const imageName = src.replace(/^.*\//, '').replace(/\.[^/.]+$/, '');
  const webpHook = useOptimizedImage(imageName, 'webp');
  const jpegHook = useOptimizedImage(imageName, 'jpeg');

  if (webpHook.loading || jpegHook.loading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        {...props}
      />
    );
  }

  const webpSrcSet = webpHook.getSrcSet();
  const jpegSrcSet = jpegHook.getSrcSet();

  return (
    <picture className={className}>
      {webpSrcSet && (
        <source
          srcSet={webpSrcSet}
          sizes={sizes}
          type="image/webp"
        />
      )}
      {jpegSrcSet && (
        <source
          srcSet={jpegSrcSet}
          sizes={sizes}
          type="image/jpeg"
        />
      )}
      <img
        src={jpegHook.getImageSrc()}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </picture>
  );
}