import React,{useEffect,useState} from 'react'
import { StyleSheet,View, Text ,TouchableHighlight,ActivityIndicator,Image,FlatList} from 'react-native'
import axios from 'axios' 
import moment from 'moment';
 

export default function MoviesList({navigation}) {

    const [movies,setMovies] = useState([])
    const [istLoading,setLoading] = useState(true)



    useEffect(() => {
        axios.get(`https://movie-api.igeargeek.com/movies`)
            .then(res => {
            const movies = res.data.data;
            setMovies(movies)
            setLoading(false)
        })
      }, [])
 
if(istLoading){
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator/>
        </View>
    )
}

return (
    <View style={{flex:1 ,backgroundColor:'black'}}>
        <FlatList
            data={movies}
            numColumns={2}
            horizontal={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
            return(
                <TouchableHighlight
                style={styles.cardMovie}
                 activeOpacity={0}
                 onPress={() =>
                     navigation.navigate(
                    'MovieDetail',
                    { id: item.id }
                    )
                }>
                <View style={{flex:1}}>
                  <Image source={{uri: item.posterUrl}}
                        style={styles.movieImage} />
                     <View style={{padding: 20}}>
                           <Text style={styles.textDate}>{moment(item.showingAt).format('DD/MM/YYYY')}</Text>
                           <Text style={styles.textTitle}>{item.name}</Text>
                      </View>
                  </View>
                </TouchableHighlight>
            )

                
            }}
        />

    </View>
)
}

const styles = StyleSheet.create({
    container: {
    },
    textDate: {
        color:'#e1b12c'
    },
    textTitle: {
        marginTop:5,
        color:'white',
        fontSize:18,
        lineHeight:27
    },
    cardMovie: {
        flex:0.5
    },
    movieImage: {
        height:300
    },
 })
 
