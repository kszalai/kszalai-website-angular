<script>
    export let hrefLink = "";
    export let title = "";
    export let iconClass = "";
    export let name = "";
</script>

<li><a on:click href={hrefLink} title={title}><i class={iconClass}></i>&nbsp;{name}</a></li>