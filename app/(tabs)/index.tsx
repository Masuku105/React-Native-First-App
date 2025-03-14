
import {View,Text,ActivityIndicator,ScrollView,Image,FlatList,} from "react-native";
import { useRouter } from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import  SearchBar from "@/components/SearchBar";

const Index = () => {
    const router = useRouter();
    return (
        <View className="flex-1  bg-primary">
            <Image source={images.bg} className="absolute w-full z-0"/>
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
                <Image source={icons.logo} className="w-12 h10 mt-20 mb-5 mx-auto"/>
                <View>
                    <SearchBar/>
                </View>
            </ScrollView>

        </View>

    );
};

export default Index;
