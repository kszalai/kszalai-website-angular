<script lang="ts">
  import Footer from './footer.svelte';
  import InfoHeader from './info-header.svelte';
  import Home from './lib/pages/home.svelte';
  import Nav from './lib/nav/nav.svelte';
  import DatabasePrinciples from './lib/pages/database-principles.svelte';
  import WebProgramming from './lib/pages/web-programming.svelte';

  let currentPage: string = "home";

  function onNavigate(route: string): void {
    currentPage = route;
  }
</script>

<Nav onNavigate={onNavigate} />

<!-- <InfoHeader />

{#if currentPage == "home"}
<Home />
{:else if currentPage == "database-principles"}
<DatabasePrinciples />
{:else if currentPage == "web-programming"}
<WebProgramming />
{/if}

<Footer /> -->