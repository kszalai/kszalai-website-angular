<script lang="ts">
  import NavExpandButton from "./nav-expand-button.svelte";
  import NavLogo from "./nav-logo.svelte";
  import NavMobileMenu from "./nav-mobile-menu.svelte";
  import NavMainMenu from "./nav-main-menu.svelte";
  import { NavDropdownMenu, NavMenu, type NavMenuItem } from "./nav-menu";

  let menu = new NavMenu();

  function onMainMenuClick(): void {
    menu.open = !menu.open;
  }

  function onSubMenuClick(submenu: NavDropdownMenu) {
    submenu.open = !submenu.open;
  }

  function onInternalLinkClick(link: NavMenuItem) {
    closeEntireMenu();
    console.log(link);
    // onNavigate(link.id);
  }

  function onHomeClick(): void {
    closeEntireMenu();
    onNavigate("home");
  }

  function closeEntireMenu(): void {
    // menuOpen.main = false;
    // menuOpen.universityWork = false;
  }

  export let onNavigate: Function;
</script>

<nav class="bg-blue-300 dark:bg-blue-800 text-black dark:text-white top-0 shadow-lg">
  <div class="mx-auto max-w-7xl px-4">
    <div class="flex justify-between items-center">
      <NavLogo on:click={onHomeClick} />

      <NavMainMenu {menu} {onSubMenuClick} {onInternalLinkClick} />

      <NavExpandButton mobileMenuOpen={menu.open} on:click={onMainMenuClick} />
    </div>
  </div>

  <NavMobileMenu {menu} />
</nav>
