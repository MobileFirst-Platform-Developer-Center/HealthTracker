import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './MealsDetailsStyle';

class MealsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.route.params;
  }
  renderReviews = () => {
    const reviews = [];
    this.params.reviews.map(review => {
      reviews.push(
        <View style={styles.reviewItemContainer}>
          <Text style={styles.reviewName}>{review.name}</Text>
          <Text style={styles.reviewText}>{review.review}</Text>
        </View>,
      );
    });
    return reviews;
  };
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar backgroundColor="#303740" />
        <View style={styles.backArrowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Meals");
            }}>
            <Image
              source={require('../../../assets/images/back_arrow.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <Image source={this.params.image} style={styles.image} />
        <View style={styles.scrollParent}>
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.heading}>{this.params.heading}</Text>
            <Text style={styles.subHeading}>{this.params.subHeading}</Text>
            <Text style={styles.description}>{this.params.description}</Text>
            <SafeAreaView style={styles.container}>
              <Text style={styles.reviewHeading}>Reviews</Text>
              {this.renderReviews()}
            </SafeAreaView>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              console.log('Book now pressed');
            }}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MealsDetails;
