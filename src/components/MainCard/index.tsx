import { StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';

interface IProps {

}

const MainCard: React.FC<IProps> = ({movie, style}) =>{
    
  return (
    <>
      <Animatable.Image
        animation="flipInY"
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}` }}
        style={style}
        resizeMode="contain"
      />
      <Animatable.Text
        animation="flipInY"
        style={styles.title}
      >
        {movie['title']}
      </Animatable.Text>
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
    maxWidth: 100,
    height: 40,
  }
});  

export default MainCard;