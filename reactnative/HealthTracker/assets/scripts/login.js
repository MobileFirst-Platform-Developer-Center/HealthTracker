import { WLClient } from 'react-native-ibm-mobilefirst';

class UserLoginCH {
  constructor(successcb, failcb) {
    this.failcb = failcb;
    this.successcb = successcb;
  }
  handleChallenge(params) {
    const answer = {
      username: this.state.username,
      password: this.state.password,
    };
    WLClient.submitChallengeAnswer('UserLogin', answer);
  }
  handleSuccess(successVal) {
    this.successcb(successVal);
  }
  handleFailure(err) {
    this.failcb(err);
  }
}

export default UserLoginCH;
