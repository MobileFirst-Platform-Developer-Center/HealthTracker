import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { perfectShadow } from '../../GlobalStyles';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import styles from './HealthIntroStyle';

const gradientColors = ['#fb7a8f', '#fdd6bd'];

class HealthIntro extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlideIndex: 0
    };
    this.slides = [
      {
        heading: 'Track',
        textDesc:
          'Track what you eat. With just a simple scan, get the caloric information of your meal.',
        button: null
      },
      {
        heading: 'Plan',
        textDesc:
          'You are what you eat. Plan your meals beforehand by adding food recipes to your meals and balance your calories.',
        button: null
      },
      {
        heading: 'Get Started',
        textDesc: 'Are you ready to switch to a healthy lifestyle ?',
        button: {
          text: 'Lets go',
          onClick: () => {
            // navigate to login page.
            this.props.navigation.navigate('Login', {});
          }
        }
      }
    ];
  }
  onSwipe = index => {
    this.setState({
      activeSlideIndex: index
    });
  };
  renderSlides() {
    const renderSlide = [];
    this.slides.map((slide, index) => {
      renderSlide.push(
        <View style={styles.introTextContainer} key={index + 1}>
          <Text style={styles.introText}>{slide.textDesc}</Text>
          {slide.button !== null ? (
            <TouchableOpacity
              onPress={() => slide.button.onClick()}
              style={[styles.finishBtn, perfectShadow(4)]}
            >
              <Text style={styles.finishBtnText}>{slide.button.text}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      );
    });
    return (
      <View style={[styles.slideContainer]}>
        <StatusBar backgroundColor={gradientColors[0]} />
        <LinearGradient
          useAngle
          angle={160}
          colors={gradientColors}
          style={styles.gradientContainer}
        >
          <Text style={styles.introTextHeading}>
            {this.slides[this.state.activeSlideIndex].heading}
          </Text>
        </LinearGradient>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          onIndexChanged={index => this.onSwipe(index)}
          activeDotColor={gradientColors[0]}
        >
          {renderSlide}
        </Swiper>
      </View>
    );
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {this.renderSlides()}
      </>
    );
  }
}

export default HealthIntro;
