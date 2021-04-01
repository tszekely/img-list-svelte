import {createClient} from 'pexels';

const pexelsClient = createClient('563492ad6f917000010000012287a5ff396e407ca15666017c3c0a8e');

export const getCuratedPhotos = (page: number, per_page = 5) =>
  pexelsClient.photos.curated({ page, per_page });

export default pexelsClient;