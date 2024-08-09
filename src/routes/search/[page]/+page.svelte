<script>

import { onMount } from 'svelte';
import Card from '/Users/salabdoulaye/aniimee/src/components/show-card.svelte'


let target
let properTarget
let searchResults
let page


    onMount(async() => {
        
 
        target = window.location.search.split('=')[1]
        properTarget = target.replaceAll('+', " ")
        // page = window.location.pathname.split('/')
        // console.log(page)[5]
        
   


        const res = await fetch(`https://hippoanimeapi.vercel.app/anime/zoro/${properTarget}`);
		searchResults = await res.json();

        
    })
</script>

<div class="main-container">

    <h1>Search Results for {properTarget}</h1>

    <div class='result-container'>

        {#if searchResults}
        {#each searchResults.results as result}
            <Card title={result.title} poster={result.image} animeID={result.id}></Card>
        {/each}
        {:else}
            <h1>No results</h1>
        {/if}

    </div>
  
    <!-- <div class="bottom">
        {#each {length: searchResults.totalPages} as button}
            <a href="/search/{button}">
                <button>{button}</button>
            </a>
        {/each}
    </div> -->

</div>


<style>
    .main-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .result-container{
        display: flex;
        flex-wrap:wrap;

        align-items: center;
        justify-content:center;
        
    }
</style>

