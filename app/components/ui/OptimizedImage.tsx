import Image from "next/image";
import { cn } from "@/app/lib/utils/cn";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", fill && "h-full w-full", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn("object-cover", fill && "h-full w-full", className)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={fill ? sizes : undefined}
      />
    </div>
  );
}
