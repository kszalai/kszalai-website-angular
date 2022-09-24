<script lang="ts">
  export let hrefLink: string = "";
  export let title: string = "";
  export let iconClass: string = "";
  export let name: string = "";
</script>

<div on:click href={hrefLink} {title} class="nav-link" aria-current="page">
  <i class={iconClass} />&nbsp;{name}
</div>
