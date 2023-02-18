
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

interface IProps {

}

const MainCard: React.FC<IProps> = ({movie}) =>{
  
  // console.log('movies: ', movie);
  
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>{movie['title']}</Text>
      <Animatable.Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}` }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
    </View>
  )  
}

export default MainCard;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

