<script lang="ts">
    export let hrefLink: string = "";
    export let title: string = "";
    export let iconClass: string = "";
    export let name: string = "";
</script>

<li><a on:click href={hrefLink} title={title}><i class={iconClass}></i>&nbsp;{name}</a></li>