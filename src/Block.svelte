<svelte:options immutable={true} />

<script>
  import {colorHash} from "./util";

  export let block;
</script>

<article style="--color: {colorHash(block.id).rgb}">
  <header>
    { `${block.first_name} ${block.last_name}` }
  </header>
  <main>
    <address>
      <a href="mailto:{block.email}">{block.email}</a><br>

      <p>{ `${block.address.street}, ${block.address.city}, ${block.address.country}` }</p>
    </address>
  </main>
</article>

<style>
  article {
    width: calc(33.3333% - 1rem);
    margin: .5rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 3px;
    text-align: left;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(247deg, var(--color), transparent 90%);
    background-position: left;
    background-size: 400%;
  }

  header {
    margin: 0;
    border-bottom: 2px solid var(--color);
    padding: 0.5rem 1rem;
  }

  main {
    padding: 1rem;
    border-top: none;
  }

  a {
    color: var(--color);
  }
</style>