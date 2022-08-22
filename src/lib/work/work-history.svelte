<script lang="ts">
    export let position;
    export let company;
    export let location;
    export let startTime;
    export let endTime = "Present";
</script>

<div class="col-xs-12 text-left">
    <h3>{position}, {company}</h3>
    <h5>{location} {startTime} - {endTime}</h5>
    <ul>
        <slot></slot>
    </ul>
</div>