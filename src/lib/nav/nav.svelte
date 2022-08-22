<script lang="ts">
    import NavLink from "./nav-link.svelte";
    import NavDropdown from "./nav-dropdown.svelte";
    import NavHeader from "./nav-header.svelte";
    import NavInternalLink from "./nav-internal-link.svelte";

    let menuOpen = {
        main: false,
        universityWork: false
    };
    $: menuOpenClass = menuOpen.main ? "navbar-collapse collapse in" : "navbar-collapse collapse";

    function onMainMenuClick(): void {
        menuOpen.main = !menuOpen.main;
    }

    function onHomeClick(): void {
        closeEntireMenu();
        onNavigate("home");
    }

    function onUniversityWorkMenuClick(): void {
        menuOpen.universityWork = !menuOpen.universityWork;
    }

    function onUniversityWorkLinkClick(route: string): void {
        closeEntireMenu();
        onNavigate(route);
    }

    function closeEntireMenu(): void {
        menuOpen.main = false;
        menuOpen.universityWork = false;
    }

    export let onNavigate: Function;
</script>

<nav class="navbar navbar-default navbar-fixed-top" data-spy="affix-top">
    <div class="container-fluid">
        <NavHeader on:click={onMainMenuClick} />
        <div class={menuOpenClass} id="myNavbar">
            <ul class="nav navbar-nav">
                <NavInternalLink on:click={onHomeClick} name="Home" iconClass="fa fa-home fa-fw" />
                <NavDropdown on:click={onUniversityWorkMenuClick} menuOpen={menuOpen.universityWork} name="University Work" iconClass="fa fa-graduation-cap fa-fw">
                    <NavInternalLink on:click={() => onUniversityWorkLinkClick("database-principles")} name="Database Principles" />
                    <NavInternalLink on:click={() => onUniversityWorkLinkClick("web-programming")} name="Internet Based Computing" />
                    <!-- <NavLink name="Past Classes" hrefLink="/pastClasses.html" /> -->
                </NavDropdown>
                <NavLink name="Contact" hrefLink="mailto:kyleszalai@gmail.com" iconClass="fa fa-envelope-o fa-fw" />
            </ul>
        </div>
    </div>
</nav>