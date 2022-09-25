<script lang="ts">
    import { NavMenuLink, type NavMenuItem, type NavDropdownMenu } from "../nav-menu";
    import NavMobileLink from "./nav-mobile-link.svelte";

    export let menu: NavDropdownMenu;
    $: menuOpenClass = menu.open ? "flex" : "hidden";
    
    export let onLinkClick: (e: NavMenuItem) => void;
</script>

<a href="#" class="nav-mobile-link flex justify-between items-center" on:click>
    <div>
        <i class={menu.iconClass}></i>
        {menu.name}
    </div>
    {#if menu.open}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 right-0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    {/if} 
</a>
<div class="{menuOpenClass} flex-col">
{#each menu.links as link}
    {#if link instanceof NavMenuLink}
        <NavMobileLink {link} on:click={() => {onLinkClick(link)}} />
    {/if}
{/each}
</div>