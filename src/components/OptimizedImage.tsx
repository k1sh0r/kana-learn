import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function OptimizedImage({ src, alt, className, fallback = "/images/placeholder.jpg", ...props }: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className="relative">
      <img
        src={error ? fallback : src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        className={cn(
          "transition-all duration-200 ease-smooth",
          loading ? "blur-sm" : "blur-0",
          className
        )}
        {...props}
      />
      {loading && (
        <div 
          className="absolute inset-0 bg-background/20 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
