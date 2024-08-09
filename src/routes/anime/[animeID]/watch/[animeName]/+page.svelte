<head>
    <script src="//cdn.jsdelivr.net/npm/hls.js@1"></script>
    
    <script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@3/+esm"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=My+Soul&family=Noto+Sans+Nag+Mundari:wght@400..700&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ubuntu&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Ubuntu&display=swap" rel="stylesheet">

</head>






<script>
import Episode from '/Users/salabdoulaye/aniimee/src/components/episode-box.svelte'
import Card from '/Users/salabdoulaye/aniimee/src/components/show-card.svelte'

import 'hls-video-element';
import { onMount } from 'svelte';




    let episodeCode
    let animeCode
    let anime
    let episodeLink
    let Url
    let captionUrl
    let thumbnailUrl
    let currentEpisode


     onMount(async() => {
        
 
        episodeCode = window.location.pathname.split('/')[4]
        animeCode = window.location.pathname.split('/')[2]
        console.log(episodeCode)
        
   

        const ret = await fetch(`https://hippoanimeapi.vercel.app/anime/zoro/info?id=${animeCode}`)
        anime = await ret.json();

        const res = await fetch(`https://hippoanimeapi.vercel.app/anime/zoro/watch/${episodeCode}`);
		    episodeLink = await res.json();
        console.log(anime)



        const all = anime.episodes.length
        let i = 0 
        while (i < all){
          if (anime.episodes[i].id === episodeCode){
            currentEpisode = i
          }

          i++
        }

        console.log(currentEpisode)



     Url = "https://m3u8-proxy-cors-brown.vercel.app/cors?url=" +episodeLink.sources[0].url 
     captionUrl = 'https://corsproxy.io/?' + episodeLink.subtitles[0].url
     thumbnailUrl = 'https://corsproxy.io/?' + episodeLink.subtitles[1].url
  
      console.log(captionUrl,thumbnailUrl)







    })
  



</script>



{#if episodeLink && anime && currentEpisode} 
<div class="main-thing">
  <media-controller>
    <hls-video
      src={Url}
      slot="media"
      crossorigin
      
    >
    <track label="English" kind="subtitles" srclang="en" src='https://corsproxy.io/?{episodeLink.subtitles[0].url}'>
    <track label="thumbnails" kind="metadata"  src='https://corsproxy.io/?{episodeLink.subtitles[1].url}'>
  
    
    </hls-video>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-seek-backward-button></media-seek-backward-button>
      <media-seek-forward-button ></media-seek-forward-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-time-range></media-time-range>
      <media-time-display showduration remaining></media-time-display>
      <media-playback-rate-button></media-playback-rate-button>
      <media-captions-menu hidden id="menu1" anchor="menu-button1"></media-captions-menu>
    <media-captions-menu-button id="menu-button1" invoketarget="menu1"></media-captions-menu-button>
      <media-fullscreen-button></media-fullscreen-button>
      <media-preview-thumbnail
    mediapreviewimage='https://corsproxy.io/?{episodeLink.subtitles[1].url}'
  
  ></media-preview-thumbnail>
    </media-control-bar>
  </media-controller> 
  <div class="episode-wrapper">

  </div>
    <h1 class='announcement'>Episodes</h1>
  <div class="episodeBox">
    {#if anime.totalEpisodes < 150}
    {#each anime.episodes as episode}
        <Episode episodeNum={episode.number} filler = {episode.isFiller} animeID={animeCode} episodeID={episode.id}></Episode>
    {/each} 
    {:else}
    {#each anime.episodes.slice(currentEpisode,(currentEpisode+100)) as episode}
        <Episode episodeNum={episode.number} filler = {episode.isFiller} animeID={animeCode} episodeID={episode.id}></Episode>
    {/each} 
    {/if}
  </div>

  <div class="end">
    <div class="info">
      <img src="{anime.image}" alt="{anime.title}'s poster">
      <div class="Right-side">
        <h2 class="title">{anime.title}</h2>
        <p class="synopsis">{anime.description}</p>
        <h4 class="petty-info"><b>Type:</b> {anime.type}</h4>
        <h4 class="petty-info"><b>Total Episodes:</b> {anime.totalEpisodes}</h4>


      </div>

    </div>

    <div class="recs">
      <h2 class="announcement">More Like This</h2>
      <div class="cards">
        {#each anime.recommendations as recommendation}
          <Card animeID={recommendation.id} title={recommendation.title} poster={recommendation.image}></Card>
        {/each}
      </div>
    </div>
  </div>
</div>

{/if}

<style>


    .main-thing{
      padding-top: 100px;
      width: 100vw;
      height: 100vw;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    media-controller{
        width: 100vw;
        height: 70vh;
        object-fit: contain;

    }

    .announcement{
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #FF331F;
    }
    img{
      padding-left: 3vw;
      width: 25vw;
      height: 50h;
      object-fit: contain;
    }
    .episodeBox{
      width: 85vw;
      gap: 0.5vw;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .info{
      width: 60vw;
      height: 60vh;
      display: flex;
      flex-direction: row;
    }

    .title{
      color: white;
        font-family: "Noto Sans Nag Mundari", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
    }

    .synopsis{
      color: white;
        font-family: "Noto Sans Nag Mundari", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: small;
    }

    .petty-info{
      color: white;
        font-family: "Noto Sans Nag Mundari", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .cards{
      display: flex;
      flex-direction: row;
      overflow-x: auto;
    }
    .recs{
      width: 38vw;
      padding-left: 2vw;

    }
    .Right-side{
      display: flex;
      flex-direction: column;
      padding-left: 2vw;
    }

    .end{
      display: flex;
      width: 100vw;
      flex-direction: row;
      padding-top: 40px;
    }

</style>
