import {View, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useState} from 'react';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);

  const onSwitchPress = () => {
    Animated.timing(fadeAnim, {
      toValue: toggle ? 0 : 1,
      useNativeDriver: true,
      duration: 200,
    }).start(({finished}) => {
      if (finished) {
        setToggle(!toggle);
      }
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'cyan',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          backgroundColor: toggle ? '#ff3f80' : 'grey',
          width: '18%',
          height: '5%',
          borderRadius: 22,
          justifyContent: 'center',
        }}
        onPress={onSwitchPress}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            width: '45%',
            height: '75%',
            borderRadius: 80,
            margin: 5,
            transform: [
              {
                translateX: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 29],
                }),
              },
            ],
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
