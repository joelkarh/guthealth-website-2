import imageUrlBuilder from '@sanity/image-url'
export const myCustomImagebuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
        .width(options.width || Math.min(options.originalImageDimensions.width, 800))
        .fit('clip')
        .crop("entropy")
}