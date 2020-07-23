import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './MealsStyle';
import { foodItems } from '../foodCals.js';

class Meals extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const renderList = [];
    foodItems.map((item, index) => {
      renderList.push(
        <View style={styles.itemParent} key={index + 1}>
          <TouchableOpacity activeOpacity={0.9} style={[styles.item]}>
            <View style={styles.itemContainer}>
              <Text style={styles.headingText}>{item.name}</Text>
              {item['nutrition-per-100g'] !== undefined ? (
                <Text style={styles.subHeadingText}>
                  {item['nutrition-per-100g'].energy} Cals
                </Text>
              ) : null}
              {item['nutrition-per-100g'] !== undefined ? (
                <View
                  style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
                >
                  <Text style={styles.description}>
                    {item['nutrition-per-100g'].protein} protein
                  </Text>
                  <Text style={styles.description}>
                    {item['nutrition-per-100g'].fat} fats
                  </Text>
                  <Text style={styles.description}>
                    {item['nutrition-per-100g'].carbohydrate} carbs
                  </Text>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
      );
    });

    return <ScrollView>{renderList}</ScrollView>;
  }

  render() {
    return (
      <>
        <View style={styles.parent}>
          <StatusBar backgroundColor="#303740" />
          <View style={styles.listHeadContainer}>
            <Text style={styles.listHeadText}>Discover</Text>
          </View>
          <View style={styles.container}>{this.renderList()}</View>
        </View>
      </>
    );
  }
}

export default Meals;
