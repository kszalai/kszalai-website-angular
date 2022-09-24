<script lang="ts">
    import NavMobileLink from "./nav-mobile-link.svelte";
    import type { NavMenu } from "./nav-menu";

    export let menu: NavMenu;
    $: menuOpenClass = menu.open ? "flex" : "hidden";
</script>

<div class="{menuOpenClass} md:hidden flex-col">
    {#each menu.links as link}
        <NavMobileLink title={link.name} />
    {/each}
</div>