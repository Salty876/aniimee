<script>
    export let episodeNum
    export let episodeID
    export let animeID
    export let filler
</script>

<a href="/anime/{animeID}/watch/{episodeID}">
    {#if filler === true}

    <button class="episode-box-filler">
        <h5>{episodeNum}</h5>
        
    </button>
    {:else}
    <button class="episode-box-cannon">
        <h5>{episodeNum}</h5>
        
    </button>
    {/if}

</a>


<style>
    .episode-box-filler{
        width: 5vw;
        height: 4vh;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #043726;
        border: none;
    }

    .episode-box-cannon{
        width: 5vw;
        height: 4vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #6FD5B3;
        border: none;

    }
</style>