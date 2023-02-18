
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
    <>
      <Animatable.Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}` }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{movie['title']}</Text>
    </>
  )  
}

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
  },
});  

export default MainCard;