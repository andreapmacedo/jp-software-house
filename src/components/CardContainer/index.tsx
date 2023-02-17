
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

const CardContainer: React.FC<IProps> = () =>{
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>CardContainer</Text>
    </View>
  )  
}

export default CardContainer;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
});

