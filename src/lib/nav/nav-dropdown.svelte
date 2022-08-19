<script>
    export let menuOpen = false;
    $: menuOpenClass = menuOpen ? "dropdown open" : "dropdown";

    export let iconClass;
    export let name;
</script>

<li class={menuOpenClass}>
    <a href="#" on:click class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class={iconClass}></i>&nbsp;{name}<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <slot></slot>
    </ul>
</li>