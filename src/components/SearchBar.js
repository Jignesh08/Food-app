import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return <View style = {styles.backgroundStyle}>
        <Feather name="search" style = {styles.iconStyle}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style = {styles.inputStyle} 
            placeholder = "Search" 
            value = {term}
            onChangeText = {newTerm => onTermChange(newTerm)}
            onEndEditing = {() => onTermSubmit()} 
        />
  </View>
};

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor : 'grey',
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        marginTop : 8,
        flexDirection : 'row',
        marginBottom : 10
    },
    inputStyle : {
        fontSize : 18,
        flex : 1
    },
    iconStyle : {
        alignSelf : 'center',
        fontSize : 35,
        marginHorizontal : 15
    }
});

export default SearchBar;
