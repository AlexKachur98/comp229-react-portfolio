/**
 * @file OptimizedImage.jsx
 * @purpose Renders an image using the <picture> element for modern format support.
 * @author Alex Kachur
 * @since 2025-09-26
 * @description This component serves a .webp image source with a fallback to the
 * original image format, ensuring optimized images are delivered to capable
 * browsers while maintaining compatibility.
 */
export default function OptimizedImage({ src, alt, ...props }) {
    // This automatically creates the .webp path from the original src prop
    const webpSrc = src.replace(/\.(png|jpe?g)$/, '.webp');

    return (
        <picture>
            {/* The browser will try to load this .webp source first */}
            <source srcSet={webpSrc} type="image/webp" />
            {/* If it can't, it will fall back to the original .jpg or .png */}
            <img src={src} alt={alt} {...props} />
        </picture>
    );
}