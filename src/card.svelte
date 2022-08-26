<script lang="ts">
    export let id: string = "";
    export let titleAlign: string = "\"-moz-initial\" | \"inherit\" | \"initial\" | \"revert\" | \"unset\" | \"center\" | \"end\" | \"justify\" | \"left\" | \"match-parent\" | \"right\" | \"start\" | undefined";
    export let name: string = "";
    export let desc: string | null = null;
</script>

<div {id} class="col-xs-12 card" style="marginBottom: 16px">
    <h1 class="card-header" style="textAlign:{titleAlign}">
        {name}<br />
        {#if desc != null}
        <small>{desc}</small>
        {/if}
    </h1>
    <br />
    <slot></slot>
</div>