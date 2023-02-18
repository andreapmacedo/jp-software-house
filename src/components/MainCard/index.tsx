
import { 
  View,
  StyleSheet,
  Text,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

interface IProps {

}

const MainCard: React.FC<IProps> = ({movie}) =>{
    
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'yellow',
    width: 200,
    backgroundColor: 'gray',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
  },
});

export default MainCard;