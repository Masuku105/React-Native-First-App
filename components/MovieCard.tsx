import {TouchableOpacity, Image, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const MovieCard = ({id, poster_path, title, release_date}:Movie) => {
    return (
        <Link href={`/movie/${id}`} className="w-1/3" asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/lalala/ffffff.png'}}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="tet-sm font-bold text-white">
                    {title}
                </Text>

            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard
