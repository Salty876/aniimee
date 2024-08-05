export async function getAnimeTitle() {


const apiEndPoint = 'https://api.jikan.moe/v4/top/anime'

    const res = await fetch(apiEndPoint)
     if (!res.ok){
        throw new Error('HTTP error! status: ${res.status}')
    }
    const data = await res.json()
    return await data
    }

    export async function getAnimeSearchResult(target) {


        const apiEndPoint = `https://api.jikan.moe/v4/anime?q= ${target} &sfw/`
        
            const res = await fetch(apiEndPoint)
             if (!res.ok){
                throw new Error('HTTP error! status: ${res.status}')
            }
            const data = await res.json()
            return await data
            }
        

export async function fecthAnimeInfo(ID){
    const apiEndPoint = "https://api.jikan.moe/v4/anime/" + ID +  "/full"
        
            const res = await fetch(apiEndPoint)
             if (!res.ok){
                throw new Error('HTTP error! status: ${res.status}')
            }
            const data = await res.json()
     
            return await data
            }


export async function fetchAnimeRecomendations(ID){
    const apiEndPoint = "https://api.jikan.moe/v4/anime/" + ID +"/recommendations"
        const res = await fetch(apiEndPoint)
                if (!res.ok){
                    throw new Error('HTTP error! status: ${res.status}')
                }
                const data = await res.json()
                
                return await data

}


