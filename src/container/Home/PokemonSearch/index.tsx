import React, { FC, useState } from 'react'
import DisplaySearchResult from './DisplaySearchResult';
import { Button, TextField } from '@mui/material';

interface PokemonSearchProps {
  searchResults: any[],
  realTimeSearch: (search: string)=>void,
  router: any;
}

const PokemonSearch:FC<PokemonSearchProps> = (props) => {
    const {realTimeSearch, searchResults, router} = props;
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
        realTimeSearch(search);
      };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        realTimeSearch(search);
    };
  return (
    <div className='w-full relative mt-4'>
      <form className="w-full" onSubmit={handleSearch}>
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <TextField
              fullWidth
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search for a Pokemon..."
              className=''
              name={"search"}
            />
            <Button variant={"contained"} type="submit">
              Search
            </Button>
        </div>
      </form>

      {search && searchResults?.length > 0 && (
        <div className="absolute h-auto max-h-56 w-full top-[100%] left-[50%] overflow-auto translate-x-[-50%] z-[5] py-4 px-6 rounded-md bg-white shadow-md [&::-webkit-scrollbar]:appearance-none">
          <DisplaySearchResult
            searchResults={searchResults}
            router={router}
          />
        </div>
      )}
    </div>
  )
}

export default PokemonSearch