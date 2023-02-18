
import { 
  View,
  StyleSheet,
  Text,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

interface IProps {

}

const MainCard: React.FC<IProps> = ({movie, style}) =>{
    
  return (
    <>
      {/* <View style={styles.imageContainer} >  */}
      {/* <View >  */}
        <Animatable.Image
          animation="flipInY"
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}` }}
          // style={styles.image}
          style={style}
          resizeMode="contain"
        />
      {/* </View> */}

      <Animatable.Text
        animation="flipInY"
        style={styles.title}
      >
        {movie['title']}
      </Animatable.Text>
      {/* <Text style={styles.title}>{movie['title']}</Text> */}
    </>
  )  
}

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    maxWidth: 200,
    height: 40,
  },
  image: {
    
    width: 200,
    height: 200,
    // marginTop: 18,
    
    // paddingTop: 4,
    // borderRadius: 2,
    // borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignContent: 'center',
    width: 180,
    height: 200,
    // marginTop: 8,
    overflow: "hidden",
    backgroundColor: 'red ',
    // paddingTop: 4,
    borderRadius: 2,
    borderWidth: 1,
  },
});  

export default MainCard;