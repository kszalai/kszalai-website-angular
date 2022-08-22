<script lang="ts">
    export let title: string = "";
    export let iconClass: string = "";
    export let name: string = "";
</script>

<li><a on:click {title}><i class={iconClass}></i>&nbsp;{name}</a></li>