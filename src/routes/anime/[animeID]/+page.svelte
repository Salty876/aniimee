<script defer>
    // window.location.reload();
    import { onMount } from 'svelte';
    import { invalidateAll } from '$app/navigation';
    import Card from '/Users/salabdoulaye/aniimee/src/components/show-card.svelte'

    console.log('pageChange')
    let tempCode = []
    let animeData
    let anime

    let animeInfoLoaded = false

    onMount(async() => {
        
 
        tempCode = window.location.pathname.split('/')
      
        
        const res = await fetch("https://api.jikan.moe/v4/anime/" + tempCode[2] +  "/full");
		animeData = await res.json();

        const rep = await fetch("https://api.jikan.moe/v4/anime/" + tempCode[2] +"/recommendations");
		anime = await rep.json();

        console.log("https://api.jikan.moe/v4/anime/" + tempCode[2] +  "/full")


        invalidateAll();
        animeInfoLoaded = true
        
        return tempCode

        
    })


    
    
    
</script>
{#if animeInfoLoaded}
{#if animeData}
<div class='top-container'>
    <div class="right-info">

        <div class='right-right'>
            <h1 class="title">{animeData.data.title}</h1>
            <img class='anime-poster' src="{animeData.data.images.webp.image_url}" alt="{animeData.data.title}'s Poster"/>
        </div>

        <div class="right-left">
            <a href="#" target="_self">
                <button class="watch-button">
                    WATCH NOW!
                </button>
            </a>
            <p class="synopsis">{animeData.data.synopsis}</p>
        </div>
        
    </div>

    <div class="left-info">
        <p class="info"><strong>Japanese: </strong>{animeData.data.title_japanese}</p>
        <p class="info"><strong>Rating: </strong>{animeData.data.rating}</p>
        <p class="info"><strong>Aired: </strong>{animeData.data.aired.string}</p>
        <p class="info"><strong>Premiered: </strong>{animeData.data.season} {animeData.data.year}</p>
        <p class="info"><strong>Duration: </strong>{animeData.data.duration}</p>
        <p class="info"><strong>Status: </strong>{animeData.data.status}</p>
        <p class="info"><strong>MAL Score: </strong>{animeData.data.score}</p>
      
              <div class="genres">
        {#each animeData.data.genres as num}
            <a href="#">
                <button class="genre-button">
                    {num.name}
                </button>
            </a>
        {/each}
        </div>

    </div>
</div>
{/if}



    <!-- <p>waiting</p> -->




{#if anime}
<div class="The-bottom">
    <h1>Recomendations</h1>
    <div class="recomendations">

        

            {#each anime.data as animes}
                <Card title={animes.entry.title} poster={animes.entry.images.webp.image_url} animeID={animes.entry.mal_id}></Card>
            {/each}
 
    </div>
</div>
{:else}
<p>None</p>
{/if}
{/if}

 

<style>
    .top-container{
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        gap:3vw

    }

    .right-info{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vw;

        width: 65vw;
    }

    .right-right{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        color: white;
    }
    .anime-poster{
        border-radius: 2vh;
    }

    .right-left{
        display: flex;
        flex-direction: column;
        align-items: start;
        
        gap: 3vh;
    }


    .watch-button{
        width: 15vw;
        height: 7vh;
        border-radius: 1vh;

        background-color: #10b981;
        border-color: #10b981;

        color: white;
        font-size:x-large;
        font-weight: 1000;
    }
    .watch-button:hover{
        border: 10px;
        border-color: #10b981;
        color: #10b981;
        background-color: #27272a;
    }
    .synopsis{
        color: white;
    }

    

    .left-info{
        width: 30vw;
        border-left: 10px;
        border-right: 0;
        border-top: 0;
        border-bottom: 0;

        border-color: #10b981;
    }

    .info{
        color: white;
    }

    .genre-button{
        background-color: #10b981;
        color: white;
        font-weight: 700;
        border: none;
        border-radius: 1vh;
    }
    .genre-button:hover{
        background-color: #27272a;
        color: white;

    }

    .The-bottom{
        width: 100vw;
    }

    .recomendations{
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
    }
</style>  