<script lang="ts">
  import BlockList from './BlockList.svelte';

  const urlParams = new URLSearchParams(window.location.search);
  const urlPageSize = parseInt(urlParams.get("pageSize") || '');

  let page: number = 1;
  let pageSize = isNaN(urlPageSize) ? 10 : urlPageSize;

  function onPrevPage() {
    page -= 1;
  }

  function onNextPage() {
    page += 1;
  }
</script>

<main>
  <header>
    <h1>Blocks</h1>

    <label class="items">
      <span>Items: </span>
      <input type=number bind:value={pageSize}>
    </label>
  </header>

  <BlockList {page} {pageSize} />

  <footer>
    <div class="paging">
        <button on:click={onPrevPage} disabled={page < 2}>
          Prev
        </button>

      <button class="page-current">
        Page {page}
      </button>

      <button on:click={onNextPage}>
        Next
      </button>
    </div>
  </footer>
</main>

<style>
  main {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  header, footer {
    position: relative;
    margin: 0;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
  }

  .page-current {
    cursor: default;
    pointer-events: none;
    background: none;
  }

  button {
    cursor: pointer;
    appearance: none;
    margin: 0;
    padding: 0.5rem 0.75rem;
    line-height: 1;
    border: 1px solid #cccccc;
    border-radius: 2px;
    outline: none;
  }

  button:hover, button:active {
    background: #ddd;
  }

  .items {
    position: absolute;
    right: 1rem;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .items input {
    width: 50px;
    margin: 0 0 0 0.5rem;
    padding: 0.5rem 0.75rem;
    line-height: 1;
    border: 1px solid #cccccc;
    border-radius: 2px;
    outline: none;
  }
</style>