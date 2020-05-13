import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingLeft: Dimensions.get('screen').width * 0.03,
  },
  welcomeTextContainer: {
    paddingTop: 10,
  },
  textContainer: {
    flex: 1,
    zIndex: 2,
    paddingTop: Dimensions.get('window').height * 0.13,
    alignItems: 'flex-start',
  },
  textHeading: {
    color: '#484848',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2,
  },
  textSubHeading: {
    color: '#484848',
    fontSize: 18,
    textAlign: 'left',
  },
  logoContainer: {
    width: Dimensions.get('screen').width * 0.22,
    height: Dimensions.get('screen').width * 0.24,
    elevation: 5,
    borderRadius: 10,
    borderColor: '#ffff',
    marginBottom: 10,
  },
  logoImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  loginFormContainer: {
    flex: 1,
    paddingTop: Dimensions.get('screen').height * 0.05,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  loginInput: {
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#dcdcdc',
    fontSize: 18,
  },
  loginButton: {
    marginTop: Dimensions.get('screen').height * 0.07,
    elevation: 5,
    width: Dimensions.get('screen').width * 0.7,
    padding: Dimensions.get('screen').height * 0.015,
    backgroundColor: '#333c46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  forgotTextContainer: {
    marginTop: Dimensions.get('screen').height * 0.04,
    justifyContent: 'center',
  },
  forgotPwdText: {
    fontSize: 15,
    color: '#333c46',
    textAlign: 'center',
  },
});


export default styles;
