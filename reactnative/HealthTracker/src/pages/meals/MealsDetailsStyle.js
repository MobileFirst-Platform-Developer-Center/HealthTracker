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
    paddingTop: 10,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollParent: {
    height: Dimensions.get('window').height * 0.8,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'column',
  },
  backArrowContainer: {
    width: '100%',
    marginBottom: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },

  image: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
  },
  reviewItemContainer: {
    backgroundColor: '#f0f3f3',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  reviewHeading: {
    fontSize: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#f0f3f3',
  },
  reviewName: {
    fontSize: 18,
    fontWeight: '600',
  },
  reviewText: {
    paddingTop: 5,
    fontSize: 15,
  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#496ca3',
    bottom: Dimensions.get('window').height * 0.02,
    padding: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default styles;
