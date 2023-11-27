import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
const Profileheader = () => {
  return (
    <View style={styles.profile}>
      <View
        style={{
          height: '100%',
          width: wp(15),
          // backgroundColor: 'yellow',
        }}>
        <Image
          source={require('../assets/images/base.png')}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'green',
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'yellow',
            borderRadius: 100,
            marginRight: 5,
          }}>
          <Image
            source={require('../assets/images/Avatar.png')}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View>
          <Entypo name="chevron-down" color="#718096" size={30} />
        </View>
      </View>
    </View>
  );
};

export default Profileheader;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(8),
    // backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, // for Android
  },
});
