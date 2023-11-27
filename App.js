import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Profileheader from './src/components/profileheader';
import Modal from 'react-native-modal';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Profileheader />
      <View
        style={{
          // width: '90%',
          height: hp(36),
          // marginHorizontal: wp(1),
          marginVertical: hp(4),
          borderRadius: 20,
          overflow: 'hidden',
          backgroundColor: 'blue',
        }}>
        <ImageBackground
          resizeMode="stretch"
          style={{height: '100%', width: '100%'}}
          source={require('./src/assets/images/container.png')}>
          <Text
            style={{
              fontFamily: 'Roboto Flex',
              fontSize: 30,
              fontStyle: 'normal',
              // fontWeight: '600',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#ffffff',

              marginTop: hp(9),
            }}>
            Hi! 👋 James Doe
          </Text>
          <View style={{alignItems: 'center', margin: hp(2)}}>
            <Text
              style={{
                color: '#FFF', // Default to white if the variable is not defined
                textAlign: 'center',
                // H5/regular
                fontFamily: 'Roboto Flex',
                fontSize: 16,
                fontStyle: 'normal',
                // fontWeight: '400',
                fontWeight: 'bold',
                width: '70%',
                marginLeft: -1.5,
              }}>
              Lorem ipsus dolor sit amen, something important to say here
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              onPress={toggleModal}
              style={{
                color: '#ffffff', // Default to white if the variable is not defined
                // H6/medium
                fontFamily: 'Roboto Flex',
                fontSize: 14,
                fontStyle: 'normal',
                // fontWeight: '500',
                fontWeight: 'bold',
                width: '30%',
                textAlign: 'center',
                backgroundColor: '#7B5AFF',
                padding: 10,
                borderRadius: 20,
              }}>
              Add Check In
            </Text>
          </View>
        </ImageBackground>
      </View>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#F8F8F8',
              }}>
              <Text style={{color: '#000000'}}>Add Check In</Text>
              <Image
                tintColor={'#000000'}
                source={require('./src/assets/images/Close.png')}
                style={{height: 20, width: 20}}
              />
            </View>
            <Text style={{marginHorizontal: wp(5)}}>Title</Text>
            <TextInput
              placeholder="Enter title"
              style={{
                marginHorizontal: wp(5),
                borderRadius: 10,
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: '#D9D9D9',
                marginTop: hp(2),
              }}
            />
            <Text style={{marginHorizontal: wp(5), marginTop: hp(3)}}>
              Title
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(5),
    paddingHorizontal: wp(5),
    backgroundColor: '#ffffff',
  },
});
