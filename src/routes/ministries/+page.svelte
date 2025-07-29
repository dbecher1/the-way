<script lang="ts">

    let group = $state('childrens');
</script>
<svelte:head>
    <title>The Way - Ministries</title>
</svelte:head>
Ministries



<div class="tabs tabs-border">
  <input type="radio" name="h" class="tab" aria-label="Children's Ministry" value="childrens" bind:group/>
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

  <input type="radio" name="h" class="tab" aria-label="Youth Ministry" value="youth" bind:group/>
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>
</div>