import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  ScrollView
} from 'react-native';

import styles from './HealthhomeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Healthhome extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [
      {
        title: 'Plan',
        desc: 'Plan your meals here',
        navigatePage: 'Home',
        icon: require('../../../assets/images/payslips.jpeg')
      },
      {
        title: 'Count Calories',
        desc: 'Scan your food and get caloric info',
        navigatePage: 'Calscanner',
        icon: require('../../../assets/images/compensation.jpeg')
      },
      {
        title: 'HealthBot',
        desc: 'Talk to a health bot',
        navigatePage: 'Healthbot',
        icon: require('../../../assets/images/benefits.jpeg')
      },
      {
        title: 'Suggested Meals',
        desc: 'List of amazing healthy food options for you',
        navigatePage: 'Meals',
        icon: require('../../../assets/images/docs.jpeg')
      }
    ];
  }
  navigatePage = page => {
    this.props.navigation.navigate(page);
  };
  renderCards = () => {
    const cardsToRender = [];
    this.cards.map(card => {
      cardsToRender.push(
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => this.navigatePage(card.navigatePage)}
          >
            <ImageBackground
              style={styles.image}
              imageStyle={{ borderRadius: 15 }}
              source={card.icon}
            >
              <View style={styles.overlay} />
            </ImageBackground>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>{card.title}</Text>
              <Text style={styles.cardText}>{card.desc}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
    return cardsToRender;
  };

  render() {
    return (
      <View style={styles.parent}>
        <StatusBar backgroundColor="#353535" />
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.homeHeading}>Hello, User.</Text>
            <Text style={styles.homeSubHeading}>
              We're glad to help you with your documents.
            </Text>
          </View>
          <ScrollView contentContainerStyle={styles.cardsContainer}>
            {this.renderCards()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Healthhome;
