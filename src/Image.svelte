<script>
  // import { Photo } from 'pexels';
  import {scale} from 'svelte/transition';

  export let photo;
</script>

<article transition:scale>
  <img src={photo.src.landscape} alt={photo.photographer} />
</article>

<style>
  article {
    /*flex: 1 1 auto;*/
    width: calc(33.3333% - 1rem);
    margin: .5rem;
    overflow: hidden;
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
</style>