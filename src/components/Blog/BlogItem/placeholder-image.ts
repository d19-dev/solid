import { FeaturedImage } from '../../../@types';

// TODO создать пул из 12 картинок и отдавать случайную
const placeholderImage: FeaturedImage = {
  node: {
    id: 'cG9zdDo2MTk=',
    altText: '',
    srcSet: `${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-300x200.jpg 300w, ${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-1024x683.jpg 1024w, ${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-768x512.jpg 768w, ${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-1536x1024.jpg 1536w, ${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-2048x1366.jpg 2048w, ${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026-1568x1046.jpg 1568w`,
    sizes: '(max-width: 300px) 100vw, 300px',
    sourceUrl: `${process.env.GATSBY_PLACEHOLDER_IMAGES}/shutterstock_778223026.jpg`,
  }
}

export default placeholderImage
