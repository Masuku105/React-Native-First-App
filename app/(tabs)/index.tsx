
import {View,Text,ActivityIndicator,ScrollView,Image,FlatList,} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import  SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import {fetchMovies} from "@/services/api";
import  useFetch from "@/services/usefetch"
import items from "ajv/lib/vocabularies/applicator/items";
import MovieCard from "@/components/MovieCard";

const Index = () => {
    const router = useRouter();
    const {data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() => fetchMovies({ query: ''}));
    return (
        <View className="flex-1  bg-primary">
            <Image source={images.bg} className="absolute w-full z-0"/>
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
                <Image source={icons.logo} className="w-12 h10 mt-20 mb-5 mx-auto"/>
                {moviesLoading ? (
                    <ActivityIndicator size="large" color="#000ff" className="mt-10 self-center"/>
                ): moviesError? (<Text>{moviesError.message}</Text>):
                    (
                        <View>
                            <SearchBar
                                onPress={() => router.push("/search")}
                                placeholder="Search for a movie"
                            />
                            <>
                                <Text className="text-lg text-white font-bold mt-5 mb-3">
                                    Latest Movies
                                </Text>
                                <FlatList
                                    data={movies}
                                    renderItem={({item}) => (
                                        <MovieCard
                                            {... item}
                                        />
                                    )}
                                    keyExtractor={(item) => item.id.toString()}
                                    numColumns={3}
                                    columnWrapperStyle={{
                                        justifyContent: 'flex-start',
                                        gap: 20,
                                        paddingRight: 5,
                                        marginBottom: 10
                                    }}
                                    className="mt-2 pb-32"
                                    scrollEnabled={false}
                                />
                            </>
                        </View>
                    )
                }

            </ScrollView>

        </View>

    );
};

export default Index;
