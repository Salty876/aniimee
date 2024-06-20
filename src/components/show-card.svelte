<script>
    import { goto } from '$app/navigation';
    import { animeInfo } from '/Users/salabdoulaye/aniimee/src/stores'
  
    export let title
    export let poster
    export let animeID

    function setID(ID){
     $animeInfo = ID

     goto('/animeInfo')
     console.log(ID)
    }
    
</script>

<main> 
    
<div class="card">
<!-- <a href="/animeInfo"> -->
   
        <input class='img' type="image" src="{poster}" alt="anime-poster" on:click={setID(animeID)} href='/animeInfo'/>
<!-- </a> -->

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





