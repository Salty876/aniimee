<script>
    import { goto } from '$app/navigation';

  
    export let title
    export let poster
    export let animeID

  
</script>

<main> 
    
<div class="card">
<a href='/anime/{animeID}' data-sveltekit-reload>
   
        <input class='img' type="image" src="{poster}" alt="anime-poster" href='/animeInfo' data-sveltekit-reload/>
</a>

    <p class="anime-title">{title}</p>

</div>
</main>

<style>
  main{
    width: 13vw;
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .img{
    border-radius: 2vh;
  }

  p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
    color: white;
  }

  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>





