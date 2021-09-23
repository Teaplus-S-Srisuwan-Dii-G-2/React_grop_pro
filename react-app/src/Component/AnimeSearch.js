import { useState, useEffect } from 'react';

import AnimeContentSearch from './AnimeContentSearch';

function Search() {
	const [animeList, SetAnimeList] = useState([]);
	
	const [search, SetSearch] = useState("");



	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		// const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		const temp = await fetch(`https://api.aniapi.com/v1/anime?title=${query}&formats=0,1`)
		// const temp = await fetch(`https://api.aniapi.com/v1/anime?title=Narut&formats=0,1`)


        
			.then(res => res.json());

            if(!undefined){
                 SetAnimeList(temp.data.documents);	
            }
            else{
              console.log(`asdhjklas`);
               
            }

	
	}



	return (
		
			
				<AnimeContentSearch
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
		
		
	);
}

export default Search;