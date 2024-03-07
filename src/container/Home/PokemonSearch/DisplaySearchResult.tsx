
import React, { FC } from 'react'

interface DisplaySearchResultProps {
    searchResults: any[];
    router: any;
}

const DisplaySearchResult:FC<DisplaySearchResultProps> = ({searchResults, router}) => {

    return searchResults?.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            onClick={() => router.push(`/${pokemon.name}`)}
            className="flex flex-row items-center py-[0.5rem] px-4 rounded-md cursor-pointer text-text-lg font-medium text-gray-900 uppercase"
          >
            {pokemon.name}
          </div>
        );
      });
}

export default DisplaySearchResult