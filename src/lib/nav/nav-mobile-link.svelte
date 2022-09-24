<script lang="ts">
    import type { NavMenuLink } from "./nav-menu";

    export let link: NavMenuLink;
</script>

<a href="#" on:click class="nav-mobile-link">{link.name}</a>