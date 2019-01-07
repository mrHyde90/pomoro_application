import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ButtonGeneral = ({disabled, onPress, children}) => {
  const { buttonStyle, textStyle, buttonStyleDisabled } = styles;
  let estiloButton = buttonStyle;
  if(disabled){
    estiloButton = buttonStyleDisabled;
  } 
  return (
    <TouchableOpacity style={estiloButton} onPress={onPress} disabled={disabled} >
      <Text style={textStyle} >
          {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center', //la posicion de lo que esta adentro del elemento
    fontSize: 16,
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //datelo hasta los limites,
    alignSelf: 'stretch', //llega hasta los limites del button
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  buttonStyleDisabled: {
    flex: 1, //datelo hasta los limites,
    alignSelf: 'stretch', //llega hasta los limites del button
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff0000',
    marginRight: 5,
    marginLeft: 5
  }
});