import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  slideContainer: {
    flex: 1,
  },
  gradientContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introTextContainer: {
    height: Dimensions.get('screen').height * 0.6,
    padding: Dimensions.get('screen').height * 0.05,
    alignItems: 'center',
  },
  introTextHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  introText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#2c3e50',
  },
  finishBtn: {
    width: Dimensions.get('screen').width * 0.6,
    marginTop: Dimensions.get('screen').height * 0.03,
    padding: Dimensions.get('screen').width * 0.03,
    backgroundColor: '#2c3e50',
  },
  finishBtnText: {
    fontSize: 18,
    color: '#ffffff',
    width: '100%',
    textAlign: 'center',
  },
});
