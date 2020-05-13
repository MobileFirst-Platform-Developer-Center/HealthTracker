import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  homeHeading: {
    fontSize: 40,
    fontWeight: '100',
    color: '#353535',
  },
  homeSubHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#484848',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    height: Dimensions.get('window').height,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
    marginTop: Dimensions.get('window').height * 0.05,
  },
  card: {
    borderRadius: 15,
    width: Dimensions.get('window').width / 2 - 20,
    marginRight: 5,
    marginBottom: 10,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    paddingTop: 20,
    paddingLeft: 10,
    zIndex: 2,
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#484848',
  },
  cardText: {
    color: '#353535',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    width: Dimensions.get('window').width / 2 - 20,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10,
  },
});

export default styles;
