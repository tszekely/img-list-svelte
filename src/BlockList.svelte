<script lang="ts">
  import {getJsonItems} from "./api";
  import Block from "./Block.svelte";

  export let page: number = 1;
  export let pageSize = 100;

  let jsonItems = [];

  getJsonItems().then(resItems => jsonItems = resItems);

  $: displayItems = jsonItems.slice((page - 1) * pageSize, page * pageSize);
</script>

<section>
    {#each displayItems as block (block.id)}
      <Block {block} />
    {/each}
</section>

<style>
  section {
    overflow: auto;
    height: calc(100% - 138px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: .5rem;
    position: relative;
  }
</style>