'use client'
import { useGlobalContext } from '@/_shared/customHooks/useGlobalContext';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { left_arrow_icon } from '@/_shared/assets/icons';
import CustomLoader from '@/_shared/components/CustomLoader';

const DetailsPageContainer = () => {
    const { pokemon } = useParams();
    const router = useRouter();

    const { getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

    useEffect(() => {
        if (pokemon) {
          getPokemon(pokemon);
        }
    }, [pokemon]);

    let myLink = "";

    if (pokemonItem?.sprites?.other) {
        const { "official-artwork": link } = pokemonItem?.sprites?.other;
        myLink = link.front_default;
    }
      
  return (
    <div className="w-full px-4 lg:px-12 mt-4 bg-transparent xl-1:px-0 lg:pb-16 xl-1:pb-0">
        <div className="w-full pb-8 lg:pb-0 flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
            {!loading ? (
                pokemonItem && (
                <>
                    <button className="w-[2rem]  bg-transparent flex flex-row justify-between items-start p-0  border-0 outline-0 rounded-sm" onClick={() => router.push("/")}>
                        <Image src={left_arrow_icon} alt="left_arrow_icon" className='' width={32} height={32}/>
                    </button>
                    <Card className="" sx={{ maxWidth: "100%", margin: "4rem auto 0 auto"}}>
                        <CardMedia
                            component="img"
                            sx={{ height: 395 }}
                            image={pokemonItem?.sprites?.other?.home.front_default
                                ? pokemonItem?.sprites?.other?.home.front_default
                                : myLink}
                            alt={pokemonItem?.name || ""}
                        />
                        <CardContent>
                            <Typography className="flex flex-row gap-3 flex-wrap" paragraph>Name: {pokemonItem?.name}</Typography>
                                <Typography className="flex flex-row gap-3" paragraph>Type:
                                {pokemonItem?.types?.map((type: any) => {
                                    return <p key={type.type.name}>{type.type.name},</p>;
                                })}
                                </Typography>
                                <Typography className="flex flex-row gap-3 flex-wrap" paragraph>Height:
                                    {pokemonItem?.height}
                                </Typography>
                                <Typography className="flex flex-row gap-3 flex-wrap" paragraph>Abilities:
                                    {pokemonItem?.abilities?.map((ability: any) => {
                                        return (
                                        <p key={ability.ability.name}>{ability.ability.name},</p>
                                        );
                                    })}
                                </Typography>
                                <Typography className="flex flex-row gap-3 flex-wrap" paragraph>Stats:
                                    {pokemonItem?.stats?.map((stat:any) => {
                                        return <p key={stat.stat.name}>{stat.stat.name},</p>;
                                    })}
                                </Typography>
                                <Typography className="flex flex-row gap-3 flex-wrap" paragraph>A few moves:
                                    {pokemonItem?.moves?.slice(0, 3).map((move: any) => {
                                        return <p key={move.move.name}>{move.move.name},</p>;
                                    })}
                                </Typography>
                        </CardContent>
                        
                    </Card>
                </>
                )
            ) : (
                <>
                    <CustomLoader/>
                </>
            )}
        </div>
    </div>
  )
}

export default DetailsPageContainer