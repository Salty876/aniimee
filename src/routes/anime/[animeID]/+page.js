// export const load = ({fetch, params}) => {
    
//     const fetchAnime = async(id) => {
//         const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
//         if (!res.ok){
//            throw new Error('HTTP error! status: ${res.status}')
//        }
//        const data = await res.json()

//        return await data
//     }

//     console.log({
//         anime: fetchAnime(params.AnimeID)
//     })
//     console.log(params.AnimeID)
//     return{

//         anime: fetchAnime(params.AnimeID)
//     }
// }