<script>
    import { goto } from '$app/navigation';

  
    export let title
    export let poster
    export let animeID

  
</script>

<main> 
    
<div class="card">
<a href='/anime/{animeID}' data-sveltekit-reload>
   
        <input class='img' type="image" src="{poster}" alt="anime-poster" href='/anime/{animeID}' data-sveltekit-reload/>
</a>
{#if title.length < 16}
  <p class="anime-title">{title}</p>
{:else}
<p class="anime-title">{title.slice(0,16)}...</p>
{/if}



</div>
</main>

<style>
  main{
    width: 13vw;
    padding-left: 3vw;
    padding-right: 3vw;
  }

  .img{
    border-radius: 2vh;
    height: 30vh;
    width: 20vw;
    object-fit: contain;
  
  }

  p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    color: white;
    width: 100%;
  }



  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2vw;
    padding-right: 2vw;
  }


  @media(max-width: 600px)  {
    .img{
      width: 40vw;
      height: 100%;

    padding: 0;
    }

    main{
    width: 40vw;

    padding-left: 3vw;
    padding-right: 3vw;
  }


    a{
      padding: 0;
    }
  }
</style>





