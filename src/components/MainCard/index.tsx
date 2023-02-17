
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

const MainCard: React.FC<IProps> = () =>{
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>MainCard</Text>
    </View>
  )  
}

export default MainCard;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
});

