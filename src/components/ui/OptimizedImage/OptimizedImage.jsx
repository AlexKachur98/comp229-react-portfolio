/**
 * @file OptimizedImage.jsx
 * @purpose Render an image with WebP optimization and fallback to original format. 
 * @autho Alex Kachur
 * @since 2025-09-26
 * @description Serves a modern WebP image when available, with automatic fallback 
 * to the original .jpg/.png file if WebP is unsupported or missing.
 */
import PropTypes from 'prop-types';

export default function OptimizedImage({ src, alt, ...props }) {
    // If source is JPG/PNG, try a .webp alternative
    const isJpgOrPng = /\.(png|jpe?g)$/i.test(src);
    const webpSrc = isJpgOrPng ? src.replace(/\.(png|jpe?g)$/i, '.webp') : null;

    return (
        <picture>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img src={src} alt={alt} {...props} />
        </picture>
    );
}

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
