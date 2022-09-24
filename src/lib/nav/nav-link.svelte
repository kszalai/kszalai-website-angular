<script lang="ts">
  import type { NavMenuLink } from "./nav-menu";

  export let link: NavMenuLink;
</script>

<a on:click href="{link.href}" title={link.title} class="nav-link" aria-current="page">
  <i class={link.iconClass} />&nbsp;{link.name}
</a>
