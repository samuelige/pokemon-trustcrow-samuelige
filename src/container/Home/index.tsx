"use client"
import { useGlobalContext } from '@/_shared/customHooks/useGlobalContext';
import React from 'react'
import PokemonSearch from './PokemonSearch';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import CustomLoader from '@/_shared/components/CustomLoader';

const HomepageContainer = () => {
    const router = useRouter();
    const {
        allPokemonData,
        searchResults,
        next,
        getPokemon,
        loading,
        realTimeSearch,
      } = useGlobalContext();

      
  return (
    <main className='w-full px-4 lg:px-8 mt-6 bg-transparent lg:mt-4 xl-1:px-0'>
        <div className="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">

            {allPokemonData.length > 0 && !loading ? (
                <>
                    <PokemonSearch
                        searchResults={searchResults}
                        realTimeSearch={realTimeSearch}
                        router={router}
                    />
                    <div className="grid gap-4 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4 mt-8">
                        {
                            allPokemonData.map((pokemon) => {
                                return (
                                    // <Card key={pokemon.id} className={"max-w-[100%] lg:h-[430px]"} sx={{ maxWidth: "100%", height: 430}}>
                                    <Card key={pokemon.id} className={"max-w-[100%] lg:h-[430px]"}>
                                        <CardMedia
                                            component="img"
                                            alt={pokemon.name || ""}
                                            className={"lg:h-[30px"}
                                            // height="30"
                                            image={pokemon.sprites.other.home.front_shiny || ""}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {pokemon.name}
                                            </Typography>
                                            
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => router.push(`/${pokemon.name}`)}>Learn More</Button>
                                        </CardActions>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </>
                
                ) : (
                <>
                    <CustomLoader/>
                </>
            )}
                
            <div className="w-full mt-3 flex flex-col">
                {allPokemonData?.length > 0 && (
                    <div className="mx-auto">
                        <Button variant={"contained"} type="button" onClick={next}>
                            Load More
                        </Button>
                    </div>
                    
                )}
            </div>
        </div>
      
    </main>
  )
}

export default HomepageContainer