import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  pageHeading: {
    paddingTop: 10,
    fontSize: 20,
    color: '#353535',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  topContentContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  resultsContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 10
  },
  imageContainer: {
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    marginBottom: Dimensions.get('window').height * 0.01,
    borderColor: '#28313b'
  },
  vrImage: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2
  },
  recognizeImageText: {
    fontSize: 15,
    color: '#353535'
  },
  buttonsContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonOne: {
    backgroundColor: '#28313b',
    color: '#ffffff'
  },
  buttonTwo: {
    backgroundColor: '#c8c7cc'
  },
  buttonTwoText: {
    color: '#28313b'
  },
  button: {
    width: '40%',
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 10
  },
  buttonText: {
    width: '100%',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  resultsText: {
    fontSize: 25,
    // fontWeight: 'bold',
    color: '#353535'
  },
  resultListContainer: {
    // flex: 1,
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
    paddingBottom: Dimensions.get('window').height * 0.03
    // padding: 10,
  },
  resultItemContainer: {
    flexDirection: 'column',
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10
  },
  resultItems: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  resultItemText: {
    color: '#353535',
    fontSize: 17,
    fontWeight: 'bold'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  resultEmptyStateContianer: {
    height: Dimensions.get('window').height * 0.4,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.1
  },
  resultEmptyStateText: {
    color: '#353535',
    fontSize: 15,
    width: '80%',
    textAlign: 'center'
  },
  simpleBtnWrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10
  },
  simpleBtn: {
    marginTop: Dimensions.get('screen').height * 0.02,
    elevation: 5,
    // width: '100%',
    padding: Dimensions.get('screen').height * 0.015,
    backgroundColor: '#333c46',
    justifyContent: 'center',
    alignItems: 'center'
  },
  simpleBtnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center'
  },
  nutritionalInfoContainer: {
    width: '100%',
    padding: Dimensions.get('screen').width * 0.02,
    backgroundColor: '#c8c7cc',
    borderRadius: 5
  },

  nutritionalInfoHeading: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
