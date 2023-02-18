
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
      <Text style={{color: 'red'}}>{movie['title']}</Text>
      <Animatable.Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}` }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
    </>
  )  
}

export default MainCard;