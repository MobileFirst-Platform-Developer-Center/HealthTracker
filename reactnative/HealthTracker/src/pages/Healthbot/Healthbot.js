import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './HealthbotStyle';
import WatsonChat from '../../../assets/scripts/chat';

class Healthbot extends React.Component {
  constructor(props) {
    super(props);
    this.url =
      'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/8ba9ce82-7a40-42cf-84f8-1593332b4959';
    this.iam_apikey = 'jH3M8tQiohMMx5SCLDGlPmdcQG1rgv4iT78WEzjffHXb';
    this.workspaceId = '5a9da8a8-ee1d-46e6-a0ec-fb8700453b9e';
    this.watson = new WatsonChat();
    this.watson.init(this.url, this.iam_apikey, this.workspaceId, true);

    this.state = {
      messages: [],
      chatInput: ''
    };
  }

  sendMessage = () => {
    let timeNowInputMsg = new Date().toLocaleTimeString();
    timeNowInputMsg = timeNowInputMsg.substr(
      0,
      timeNowInputMsg.lastIndexOf(':')
    );
    const inputMsgTime = this.watson.convertTimeToAMPM(timeNowInputMsg);
    const messages = this.state.messages.slice();
    messages.push(
      Object.assign(
        {},
        { msg: this.state.chatInput, isWatson: false, time: inputMsgTime }
      )
    );
    this.setState(
      {
        messages: messages
      },
      () => {
        this.watson.sendMessage(
          this.state.messages,
          this.state.chatInput,
          (err, msgs) => {
            if (msgs) {
              this.setState({
                messages: msgs,
                chatInput: ''
              });
            }
          }
        );
      }
    );
  };

  renderMessages = () => {
    const renderMessages = [];
    this.state.messages.map((message, index) => {
      if (message.isWatson) {
        renderMessages.push(
          <View style={styles.botMsgContainer} key={index + 1}>
            <View style={styles.botMsgWrapper}>
              <View style={styles.botMsg}>
                <Text style={styles.botChatboxHead}>BOT</Text>
                <Text style={styles.botChatText}>{message.msg}</Text>
              </View>
              <Text style={styles.botMsgTime}>{message.time}</Text>
            </View>
          </View>
        );
      } else {
        renderMessages.push(
          <View style={styles.userMsg} key={index + 1}>
            <Text style={styles.userChatboxHead}>USER</Text>
            <Text style={styles.userChatText}>{message.msg}</Text>
          </View>
        );
      }
    });
    return renderMessages;
  };
  render() {
    return (
      <>
        <View style={styles.parent}>
          <StatusBar backgroundColor="#303740" />
          <View style={styles.chatHead}>
            <Text style={styles.chatHeadText}>Health Bot</Text>
          </View>
          <View style={styles.chatContainer}>
            <ScrollView style={styles.msgContainer}>
              {this.renderMessages()}
            </ScrollView>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              placeholder="Your message here.."
              style={styles.chatboxTextInput}
              onChangeText={text => this.setState({ chatInput: text })}
              value={this.state.chatInput}
            />
            <TouchableOpacity
              onPress={() => {
                this.sendMessage();
              }}
            >
              <View style={styles.sendImage}>
                <Image
                  source={require('../../../assets/images/sendsimple.png')}
                  style={styles.sendImg}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Healthbot;
