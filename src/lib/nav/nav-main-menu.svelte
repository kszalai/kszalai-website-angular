<script lang="ts">
    import NavDropdown from "./nav-dropdown.svelte";
    import NavInternalLink from "./nav-internal-link.svelte";
    import NavLink from "./nav-link.svelte";
    import { NavDropdownMenu, NavExternalMenuLink, NavMenuLink, type NavMenuItem, type NavMenu } from "./nav-menu";

    export let menu: NavMenu;
    export let onSubMenuClick: (e: NavMenuItem) => void;
    export let onInternalLinkClick: (e: NavMenuItem) => void;
</script>

<div class="hidden md:flex relative h-16 items-center justify-start">
    {#each menu.links as link}
        {#if link instanceof NavMenuLink}
            <NavInternalLink {link} on:click={() => { onInternalLinkClick(link) }} />
        {:else if link instanceof NavExternalMenuLink}
            <NavLink name={link.name} hrefLink={link.hrefLink} />
        {:else if link instanceof NavDropdownMenu}
            <NavDropdown menu={link} {onInternalLinkClick} on:click={() => { onSubMenuClick(link) }} />
        {/if}
    {/each}
</div>