<script lang="ts">
  import NavExpandButton from "./mobile/nav-expand-button.svelte";
  import NavLogo from "./nav-logo.svelte";
  import NavMobileMenu from "./mobile/nav-mobile-menu.svelte";
  import NavMainMenu from "./nav-main-menu.svelte";
  import { NavDropdownMenu, NavMenu, NavMenuLink } from "./nav-menu";

  let menu = new NavMenu();

  function onMainMenuClick(): void {
    menu.open = !menu.open;
  }

  function onSubMenuClick(submenu: NavDropdownMenu) {
    submenu.open = !submenu.open;
    menu.links[submenu.id] = submenu;
  }

  function onLinkClick(link: NavMenuLink) {
    closeEntireMenu();
    if (link.route != null) {
      onNavigate(link.route);
    }
  }

  function onHomeClick(): void {
    closeEntireMenu();
    onNavigate("home");
  }

  function closeEntireMenu(): void {
    menu.open = false;
    for (let item of menu.links) {
      if (item instanceof NavDropdownMenu) {
        item.open = false;
      }
    }
    menu = menu;
  }

  export let onNavigate: Function;
</script>

<nav class="bg-blue-300 dark:bg-blue-800 text-black dark:text-white top-0 shadow-lg sticky">
  <div class="mx-auto max-w-7xl px-4">
    <div class="flex justify-between items-center">
      <NavLogo on:click={onHomeClick} />

      <NavMainMenu {menu} {onSubMenuClick} {onLinkClick} />

      <NavExpandButton {menu} on:click={onMainMenuClick} />
    </div>
  </div>

  <NavMobileMenu {menu} {onSubMenuClick} {onLinkClick} />
</nav>
