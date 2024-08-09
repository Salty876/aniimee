<head>
    <script src="//cdn.jsdelivr.net/npm/hls.js@1"></script>
    
    <script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@3/+esm"></script>
</head>






<script>
import 'hls-video-element';
import { onMount } from 'svelte';




    let episodeCode
    let episodeLink
    let Url
    let captionUrl
    let thumbnailUrl


     onMount(async() => {
        
 
        episodeCode = window.location.pathname.split('/')[4]
        console.log(episodeCode)
        
   


        const res = await fetch(`https://hippoanimeapi.vercel.app/anime/zoro/watch/${episodeCode}`);
		    episodeLink = await res.json();
        console.log(episodeLink)







     Url = "https://m3u8-proxy-cors-brown.vercel.app/cors?url=" +episodeLink.sources[0].url 
     captionUrl = 'https://corsproxy.io/?' + episodeLink.subtitles[0].url
     thumbnailUrl = 'https://corsproxy.io/?' + episodeLink.subtitles[1].url
  
      console.log(captionUrl,thumbnailUrl)







    })
  



</script>



{#if episodeLink}
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
  <media-captions-menu hidden id="menu1" anchor="menu-button1"></media-captions-menu>
  <media-captions-menu-button id="menu-button1" invoketarget="menu1"></media-captions-menu-button>
  <media-control-bar>
    <media-play-button></media-play-button>
    <media-seek-backward-button></media-seek-backward-button>
    <media-seek-forward-button ></media-seek-forward-button>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
    <media-time-range></media-time-range>
    <media-time-display showduration remaining></media-time-display>
    <media-playback-rate-button></media-playback-rate-button>

    <media-fullscreen-button></media-fullscreen-button>
    <media-preview-thumbnail
  mediapreviewimage='https://corsproxy.io/?{episodeLink.subtitles[1].url}'

></media-preview-thumbnail>
  </media-control-bar>
</media-controller> 
{/if}

<style>
    media-controller{
        width: 50vw;
        height: 60vh;
        object-fit: contain;

    }
</style>
