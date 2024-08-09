<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=My+Soul&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ubuntu&display=swap" rel="stylesheet">

<link rel="icon" type="image/x-icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZjMzMWYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyIDE2di00YzAtMi44MjggMC00LjI0My0uODc5LTUuMTIxYy0uODI1LS44MjYtMi4xMjMtLjg3Ni00LjYyMS0uODc5djE2YzIuNDk4LS4wMDMgMy43OTYtLjA1MyA0LjYyMS0uODc5Yy44NzktLjg3OC44NzktMi4yOTMuODc5LTUuMTJtLTMtNWExIDEgMCAxIDEgMCAyYTEgMSAwIDAgMSAwLTJtMCA0YTEgMSAwIDEgMSAwIDJhMSAxIDAgMCAxIDAtMiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iI2ZmMzMxZiIgZD0iTTE1LjU3IDMuNDg4TDEzLjQxNSA2SDE1djE2SDhjLTIuODI4IDAtNC4yNDMgMC01LjEyMS0uODc5QzIgMjAuMjQzIDIgMTguODI4IDIgMTYuMDAxdi00YzAtMi44MyAwLTQuMjQ0Ljg3OS01LjEyMkMzLjc1NyA2IDUuMTcyIDYgOCA2aDIuNTg0TDguNDMgMy40ODhhLjc1Ljc1IDAgMCAxIDEuMTM4LS45NzZMMTIgNS4zNDhsMi40My0yLjgzNmEuNzUuNzUgMCAwIDEgMS4xNC45NzYiLz48L3N2Zz4=">
</head>



<script>
    let searchTerm = ''
</script>



<nav>
    <a href="/">
        <h1 class='emblem'>Soul TV</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff331f" fill-rule="evenodd" d="M22 16v-4c0-2.828 0-4.243-.879-5.121c-.825-.826-2.123-.876-4.621-.879v16c2.498-.003 3.796-.053 4.621-.879c.879-.878.879-2.293.879-5.12m-3-5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"/><path fill="#ff331f" d="M15.57 3.488L13.415 6H15v16H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16.001v-4c0-2.83 0-4.244.879-5.122C3.757 6 5.172 6 8 6h2.584L8.43 3.488a.75.75 0 0 1 1.138-.976L12 5.348l2.43-2.836a.75.75 0 0 1 1.14.976"/></svg>
    </a>
    <form action="/search/1" data-sveltekit-reload>
        <input type="text" class="search-bar" name="search-bar" bind:value={searchTerm}>
        {#if searchTerm}
        <input type="submit" class="submit-button" value="Search">
        {/if}
    </form>


</nav>

<slot></slot>

<div class="credits">
    <a href="https://github.com/Salty876" target="_blank">Site by Salty</a>
</div>

<style>

    .emblem{
        font-family: "My Soul", cursive;
        font-weight: 700;
        font-style: normal;
        font-size: xx-large;
        padding-right: 3vw;
    }
    

    form{
        margin: 0;
        width: 25vw;

        display: flex;
        padding-right: 3vw;
    }

    .submit-button{
        background-color: #FF331F;
        border: 0;
        color: white;
    }
    .submit-button:hover{
        color: #FF331F;
        background-color: #363537;
    }

    .search-bar{
        height: 4vh;
        width: 20vw;
        border-radius: 0.2vh;
        border: none;
        background-color: #363537;
        color: white;
        font-size: medium;
    }

    .search-bar:focus{
        border-color: #10b981;
        outline: none;
    }
 


    svg{
        height: 9vh;
        width: 9vw;
    }
    nav{
        height: 10vh;
        width: 100vw;
        background-color: #1F1E1F;

        display: flex;
        justify-content:space-between;
        
        align-items: center;

        margin-bottom: 3vh;

        position: absolute;

    }

    a{
        color: white;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 2vw;
        position: relative;
    }



    .credits{
        width: 100vw;
        height: 8vh;
        background-color: #1F1E1F;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

    :global(body){
            background: #363537;
            margin: 0;
        }


        @media(max-width: 600px)  {

            nav{
                height: 15vh;
                width: 100vw;

                flex-direction: column;
                justify-content: center;
                align-items: center;

       
            }

            .search-bar{
                width: 70vw;
                margin-bottom: 6vh;
            }
            .credits{
                width: 100vw;
                height: 10vh;
            }
            form{
                width: 100vw;
                display: flex;
                justify-content: center;
            }
            .submit-button{
                height: 5vw;
            }

            .emblem{
                padding-top: 3vh ;
            }
        }
</style>