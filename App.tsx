import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity style={styles.googleLoginBtn}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '2%',
          }}>
          <Image
            source={require('./src/image/googleLogo.png')}
            style={{width: 22, height: 22}}
          />
        </View>
        <View
          style={{
            flex: 8,
            paddingRight: '8.5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontSize: 15}}>Login with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLoginBtn: {
    marginTop: '4%',
    backgroundColor: '#fff',
    width: '84%',
    paddingVertical: '3.5%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    elevation: 3,
  },
});

export default App;
