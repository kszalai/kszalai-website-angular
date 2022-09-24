<script lang="ts">
    import NavMobileLink from "./nav-mobile-link.svelte";
    import { type NavMenuItem, NavDropdownMenu, type NavMenu, NavMenuLink } from "./nav-menu";
  import NavMobileDropdown from "./nav-mobile-dropdown.svelte";

    export let menu: NavMenu;
    $: menuOpenClass = menu.open ? "flex" : "hidden";
    export let onSubMenuClick: (e: NavMenuItem) => void;
    export let onLinkClick: (e: NavMenuItem) => void;
</script>

<div class="{menuOpenClass} md:hidden flex-col">
    {#each menu.links as link}
        {#if link instanceof NavMenuLink}
            <NavMobileLink {link} on:click={() => {onLinkClick(link)}} />
        {:else if link instanceof NavDropdownMenu}
            <NavMobileDropdown menu={link} {onLinkClick} on:click={() => {onSubMenuClick(link)}} />
        {/if}
    {/each}
</div>