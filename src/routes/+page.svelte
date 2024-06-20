

<script>
    import Card from '/Users/salabdoulaye/aniimee/src/components/show-card.svelte'
    import { getAnimeTitle } from '/Users/salabdoulaye/aniimee/src/imports'


    const animeCount = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    let promise = getAnimeTitle()

</script>

<div class="Main-container">
    <h1>Popular</h1>
    <div class="cards">
        {#each animeCount as anime}
            {#await promise}
            <p>hollon</p>
            {:then title} 
                <Card title={title.data[anime].title_english} poster = {title.data[anime].images.webp.image_url} animeID = {title.data[anime].mal_id}/>
            {:catch error}
                <p>lil mistake</p>    
            {/await}
        {/each}
        
       


     

    </div>
</div>

<style>
    .Main-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }
    .cards{
        display: flex;
        flex-wrap:wrap;

        align-items: center;
        justify-content:center;
        
    }

</style>


