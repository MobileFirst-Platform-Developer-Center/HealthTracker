import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { perfectShadow, flexWidth } from '../../GlobalStyles';
import ImagePicker from 'react-native-image-picker';
import watsonRecognition from '../../../assets/scripts/watsonVr';
import styles from './CalscannerStyle';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const cameraOptions = {
  storageOptions: {
    skipBackup: true,
    waitUntilSaved: true,
    cameraRoll: true,
    path: '/'
  },
  mediaType: 'photo',
  cameraType: 'back',
  noData: true
};

class Calscanner extends React.Component {
  constructor(props) {
    super(props);
    this.url =
      'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/29f69417-351f-4bc2-ada8-fb789255740e';
    this.apiKey = 'wsPgQHIxGHggIkGnd80MxzQWeVcODpAzYDPCtVCKC-aT';
    this.modelId = 'FoodItems_1040458181';

    this.state = {
      results: [],
      isCameraOpen: false,
      imageSelected: '',
      isFetchingResult: false
    };

    this.foodItems = [
      {
        id: 'fruit-banana-fresh-raw',
        name: 'Banana',
        'nutrition-per-100g': {
          energy: 371,
          carbohydrate: 22.84,
          sugars: 12.23,
          'dietary-fibre': 2.6,
          fat: 0.33,
          protein: 1.09,
          'vitamin-b6': 0.4,
          'vitamin-c': 8.7,
          manganese: 0.3
        },
        tags: ['fruit']
      },
      {
        id: 'veg-broccoli-fresh',
        name: 'Broccoli',
        'nutrition-per-100g': {
          energy: 141,
          carbohydrate: 6.64,
          sugars: 1.7,
          'dietary-fibre': 2.6,
          fat: 0.37,
          protein: 2.82,
          'vitamin-b1': 0.071,
          'vitamin-b5': 0.573,
          'vitamin-b6': 0.175,
          'vitamin-b9': 0.063,
          'vitamin-c': 89.2,
          'vitamin-k': 101.6,
          manganese: 0.21
        },
        tags: ['vegetable', 'leafy green vegetable']
      }
    ];
  }

  renderResults() {
    // get data from the watson result.
    // get food item from foodCals.json by making comparison
    // print caloric information.
    let itemToDisplay = '';
    const renderResult = [];
    if (this.state.results.length > 0) {
      this.state.results.map(item => {
        if (item.score > 0.5) {
          this.foodItems.map(foodItem => {
            if (item.class.includes(foodItem.name.toLocaleLowerCase())) {
              itemToDisplay = foodItem;
            }
          });
          renderResult.push(
            <View style={styles.resultItemContainer}>
              <View style={styles.resultItems}>
                <Text style={styles.resultItemText}>{itemToDisplay.name}</Text>
                <Text style={styles.resultItemText}>
                  {itemToDisplay['nutrition-per-100g'].energy} cals
                </Text>
              </View>
              <View style={styles.nutritionalInfoContainer}>
                <Text style={styles.nutritionalInfoHeading}>
                  Nutritional Information
                </Text>
                <Text style={styles.resultItemText}>
                  {itemToDisplay['nutrition-per-100g'].carbohydrate}{' '}
                  carbohydrate
                </Text>
                <Text style={styles.resultItemText}>
                  {itemToDisplay['nutrition-per-100g'].fat} fat
                </Text>
                <Text style={styles.resultItemText}>
                  {itemToDisplay['nutrition-per-100g'].protien} protein
                </Text>
              </View>
            </View>
          );
        }
      });
    }
    return renderResult;
  }

  // renderResults() {
  //   const renderResult = [];
  //   if (this.state.results.length > 0 && Array.isArray(this.state.results)) {
  //     this.state.results.map(item => {
  //       const percentage = item.score * 100;
  //       renderResult.push(
  //         <View style={styles.resultItemContainer}>
  //           <Text style={styles.resultItemText}>{item.class}</Text>
  //           <Text style={styles.resultItemText}>{percentage}</Text>
  //         </View>
  //       );
  //     });
  //   } else if (this.state.results.length > 0) {
  //     renderResult.push(
  //       <View style={styles.resultEmptyStateContianer}>
  //         <Text style={styles.resultEmptyStateText}>{this.state.results}</Text>
  //       </View>
  //     );
  //   } else {
  //     renderResult.push(
  //       <View style={styles.resultEmptyStateContianer}>
  //         <Text style={styles.resultEmptyStateText}>
  //           Please click or choose an image to get started!
  //         </Text>
  //       </View>
  //     );
  //   }
  //   return renderResult;
  // }

  openCamera = () => {
    ImagePicker.launchCamera(cameraOptions, response => {
      if (response && response.didCancel) {
        this.setState({
          isCameraOpen: false
        });
        return;
      }
      if (response.uri.length > 0) {
        this.setState({
          isCameraOpen: false,
          imageSelected: response.uri,
          isFetchingResult: true
        });
        watsonRecognition(response, this.apiKey, this.url, this.modelId)
          .then(results => {
            this.setState({
              results,
              isFetchingResult: false
            });
          })
          .catch(err => {
            this.setState({
              results:
                "Sorry, we're unable to fetch at this moment. Please recheck your credentials/connection.",
              isFetchingResult: false
            });
          });
      }
    });
  };

  openGallery = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response && response.didCancel) {
        return;
      }
      this.setState(
        {
          imageSelected: response.uri,
          isFetchingResult: true
        },
        () => {
          watsonRecognition(response, this.apiKey, this.url, this.modelId)
            .then(results => {
              this.setState({
                results,
                isFetchingResult: false
              });
            })
            .catch(err => {
              this.setState({
                results:
                  "Sorry, we're unable to fetch at this moment. Please recheck your credentials/connection.",
                isFetchingResult: false
              });
            });
        }
      );
    });
  };

  render() {
    return (
      <>
        <View style={styles.parent}>
          <StatusBar backgroundColor="#353535" />
          <View style={styles.textContainer}>
            <Text style={styles.pageHeading}>Calorie Scanner</Text>
            <View style={styles.topContentContainer}>
              <View style={styles.imageContainer}>
                {this.state.imageSelected.length > 0 ? (
                  <Image
                    source={{ uri: this.state.imageSelected, isStatic: true }}
                    style={styles.vrImage}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/images/no-image.png')}
                    style={styles.vrImage}
                  />
                )}
              </View>
              <Text style={styles.recognizeImageText}>
                Start recognizing images
              </Text>
              <View style={styles.buttonsContainer}>
                <View style={[styles.button, styles.buttonOne]}>
                  <TouchableOpacity onPress={() => this.openCamera()}>
                    <Text style={styles.buttonText}>Take Picture</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.button, styles.buttonTwo]}>
                  <TouchableOpacity onPress={() => this.openGallery()}>
                    <Text style={[styles.buttonText, styles.buttonTwoText]}>
                      Upload Image
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.resultsContainer}>
              <Text style={styles.resultsText}>Results</Text>
              <View style={styles.simpleBtnWrapper}>
                <TouchableOpacity
                  style={[styles.simpleBtn, perfectShadow(5), flexWidth('80%')]}
                  onPress={() => {}}
                >
                  <Text style={styles.simpleBtnText}>Add To Meal</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.resultListContainer}>
                {this.state.isFetchingResult ? (
                  <View style={styles.resultEmptyStateContianer}>
                    <ActivityIndicator size="small" color="#28313b" />
                    <Text style={styles.resultEmptyStateText}>
                      Please wait a little, we're fetching the results..
                    </Text>
                  </View>
                ) : (
                  <ScrollView style={styles.resultsWrapper}>
                    {this.renderResults()}
                  </ScrollView>
                )}
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Calscanner;
