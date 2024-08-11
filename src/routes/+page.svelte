

<script>
    import Card from '../components/show-card.svelte'
    import { getAnimeTitle} from '../imports'
    import Banner from '../components/card-banner.svelte'



    const animeCount = [0,1,2,3,4,5,6,7,8,9]
    const lilCount = [0,1,2,3,4,5]
    let promise = getAnimeTitle('most-popular')
    let nowPromise = getAnimeTitle('recent-added')
    let airing = getAnimeTitle('top-airing')
    let fav = getAnimeTitle('most-favorite')
    let complete =getAnimeTitle('latest-completed')
</script>

<svelte:head>

<title>Watch Peak On Soul Tv!</title> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Ubuntu&display=swap" rel="stylesheet">

</svelte:head>









<div class="Main-container">
    <div class="Popular-box">
        <h1 class="section-name">Popular</h1>
    <div class="cards">
        {#each animeCount as anime}
            {#await promise}
          
            {:then title} 
                <Card title={title[anime].title} poster = {title[anime].image} animeID = {title[anime].id}/>
            {:catch error}
                <p>lil mistake</p>    
            {/await}
        {/each}
        
    </div>

    <div class="collumn-house">
        
        <div class="collumn">

            <h1 class="subtitle">Top Airing</h1>
            {#await airing}
                
            {:then airings} 
                {#each lilCount as anime}
                    <Banner poster={airings[anime].image} animeID={airings[anime].id} title={airings[anime].title} episodes={airings[anime].sub}></Banner>
                    <hr class="helpers">
                {/each}

            {/await}
            <a href="/chart/top-airing/1">
                <h2 class="Learn">Learn More ►</h2>
            </a>
        </div>


        <div class="collumn">
            <h1 class="subtitle">Most Favorite</h1>

            {#await fav}
                
            {:then airings} 
                {#each lilCount as anime}
                    <Banner poster={airings[anime].image} animeID={airings[anime].id} title={airings[anime].title} episodes={airings[anime].sub}></Banner>
                    <hr class="helpers">
                {/each}
            {/await}
            <a href="/chart/most-favorite/1">
                <h2 class="Learn">Learn More ►</h2>
            </a>
        </div>


        <div class="collumn">
            <h1 class="subtitle">Latest Completed</h1>

            {#await complete}
                
            {:then airings} 
                {#each lilCount as anime}
                    <Banner poster={airings[anime].image} animeID={airings[anime].id} title={airings[anime].title} episodes={airings[anime].sub}></Banner>
                    <hr class="helpers">
                {/each}
            {/await}
            <a href="/chart/latest-completed/1">
                <h2 class="Learn">Learn More ►</h2>
            </a>
        </div>

    </div>
<hr>


    <div class="Popular-box">
        <h1 class="section-name">Recently Added</h1>
    <div class="cards">
        {#each animeCount as anime}
            {#await nowPromise}
          
            {:then title} 
                <Card title={title[anime].title} poster = {title[anime].image} animeID = {title[anime].id}/>
            {:catch error}
                <p>lil mistake</p>    
            {/await}
        {/each}
        
    </div>
 
        
       

</div>
     

    </div>
</div>

<style>
    a{
        text-decoration: none;
    }

    .Main-container{
        padding-top: 50px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
       
    }

    hr{
        color: white;
        width: 100vw;
    }

    .Popular-box{
        width: 100vw;
        gap:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }

    .section-name{
        padding-left: 6vw;
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #FF331F;
    }

    .subtitle{
        padding-left: 6vw;
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #FF331F;

    }
    .cards{
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        align-items: center;
        justify-content:center;
        
    }

    .collumn-house{
      
        display: flex;
        flex-direction: row;
        width: 100vw;
        justify-content: space-evenly;
    }

    .helpers{
        width: 27vw;
        color: white;
    }
    .collumn{
        display: flex;
        flex-direction: column;
        width: 27vw;
        padding-left: 1vw;
    }
    .Learn{
        padding-left: 6vw;
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #FF331F;
    }

    @media(max-width: 600px)  {
        .collumn-house{
            flex-direction: column;
        
        }

        .collumn{
            width: 100vw;
        }
        .helpers{
            width: 100vw;
        }
    }

</style>


