import {TouchableOpacity, Image, Text, View} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";


const MovieCard = ({id, poster_path, title, release_date, vote_average}:Movie) => {
    return (
        <Link href={`/movies/${id}`} className="w-1/3" asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/lalala/ffffff.png'}}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="tet-sm font-bold text-white" numberOfLines={1}>
                    {title}
                </Text>
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4"/>
                    <Text className="text-xs text-white font-bold uppercase">
                        {Math.round(vote_average / 2)}
                    </Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-light-300 font-medium mt-1">
                        {release_date?.split('-')[0]}
                    </Text>
                    <Text className="text-xs text-light-300 font-medium mt-1">

                    </Text>

                </View>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard
