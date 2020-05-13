import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  listHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  listHeadText: {
    width: '90%',
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.02,
  },
  item: {
    flex: 1,
  },
  itemContainer: {
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 40,
  },
  itemImage: {
    width: '90%',
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 5,
  },
  headingText: {
    fontSize: 25,
    fontWeight: '800',
  },
  subHeadingText: {
    fontSize: 18,
  },
  description: {
    fontSize: 15,
    paddingRight: 10,
  },
});


export default styles;
