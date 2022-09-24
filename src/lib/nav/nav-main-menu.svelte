<script lang="ts">
    import NavDropdown from "./nav-dropdown.svelte";
    import NavLink from "./nav-link.svelte";
    import { NavDropdownMenu, NavMenuLink, type NavMenuItem, type NavMenu } from "./nav-menu";

    export let menu: NavMenu;
    export let onSubMenuClick: (e: NavMenuItem) => void;
    export let onLinkClick: (e: NavMenuItem) => void;
</script>

<div class="hidden md:flex relative h-16 items-center justify-start">
    {#each menu.links as link (link.id)}
        {#if link instanceof NavMenuLink}
            <NavLink {link} on:click={() => { onLinkClick(link) }} />
        {:else if link instanceof NavDropdownMenu}
            <NavDropdown menu={link} {onLinkClick} on:click={() => { onSubMenuClick(link) }} />
        {/if}
    {/each}
</div>