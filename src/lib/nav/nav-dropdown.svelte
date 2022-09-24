<script lang="ts">
    import { NavMenuLink, NavExternalMenuLink, type NavMenuItem, type NavDropdownMenu } from "./nav-menu";
    import NavInternalLink from "./nav-internal-link.svelte";
    import NavLink from "./nav-link.svelte";

    export let menu: NavDropdownMenu;
    $: menuOpenClass = menu.open ? "flex" : "hidden";
    
    export let onInternalLinkClick: (e: NavMenuItem) => void;
</script>

<li class={menuOpenClass}>
    <a href="#" on:click><i class={menu.iconClass}></i>&nbsp;{menu.name}</a>
    <ul class="dropdown-menu">
        {#each menu.links as link}
            {#if link instanceof NavMenuLink}
                <NavInternalLink {link} on:click={() => {onInternalLinkClick(link)}} />
            {:else if link instanceof NavExternalMenuLink}
                <NavLink name={link.name} hrefLink={link.hrefLink} />
            {/if}
        {/each}
    </ul>
</li>