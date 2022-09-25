<script lang="ts">
    import { NavMenuLink, type NavMenuItem, type NavDropdownMenu } from "./nav-menu";
    import NavLink from "./nav-link.svelte";

    export let menu: NavDropdownMenu;
    $: menuOpenClass = menu.open ? "flex" : "hidden";
    
    export let onLinkClick: (e: NavMenuItem) => void;
</script>

<li class="list-none">
    <a href="#" class="nav-link" on:click><i class={menu.iconClass}></i>{menu.name}</a>
    <ul class="absolute left-24 {menuOpenClass} flex-col bg-blue-400 dark:bg-blue-700 rounded">
        {#each menu.links as link}
            {#if link instanceof NavMenuLink}
                <NavLink {link} on:click={() => {onLinkClick(link)}} />
            {/if}
        {/each}
    </ul>
</li>