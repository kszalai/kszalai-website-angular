<script lang="ts">
  import { Career, Job } from "./job";


    let experience = new Career();
    var selectedJob = experience.jobs[0];

    function selectExperience(job: Job) {
        selectedJob = job;
    }
</script>

<div class="max-w-7xl h-screen-adjusted mx-auto border-red-600 border-2 flex justify-center items-center">
    <div class="w-48 mx-4 flex flex-col justify-start">
        {#each experience.jobs as job}
            <div class="w-48 p-2 font-mono text-center bg-blue-300 hover:bg-blue-500 transition-colors" on:click={() => { selectExperience(job) }}>
                {job.company}
            </div>
        {/each}
    </div>
    <div class="mx-8 flex flex-col justify-start">
        <i>{selectedJob.title} @ {selectedJob.company} in {selectedJob.location} from {selectedJob.startTime} - {selectedJob.endTime}</i>
        <ul class="list-disc list-inside">
            {#each selectedJob.description as point}
                <li>{point}</li>
            {/each}
        </ul>
        <div class="flex justify-start">
            {#each selectedJob.technology as tech}
                <i class={tech.icon}></i>
            {/each}
        </div>
        <br />
    </div>
</div>