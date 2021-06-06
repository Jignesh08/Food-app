import React , {useEffect, useState} from "react";
import { Text, StyleSheet, View , ScrollView} from "react-native";
import ResultList from "../components/resultsList";
import SearchBar from "../components/SearchBar";
import userResults from "../hooks/userResults";

const HomeScreen = () => {

  const [term , setTerm] = useState('');
  const [searchApi,results,errorMessage]  = userResults();

  const filterResultsByPrice = (price) => {
    return results.filter(results => {
      return results.price === price;
    });
  };

  return <View style={{flex :1}} > 
    <SearchBar 
      term={term} 
      onTermChange = {setTerm} 
      onTermSubmit = {searchApi} 
    />
    { errorMessage ? <Text>{errorMessage}</Text> : null}
    <ScrollView>
      <ResultList results = {filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList results = {filterResultsByPrice('$$$')} title="Big Spender"/>
      <ResultList results = {filterResultsByPrice('$$')} title="Bit Pricer"/>
    </ScrollView>
  </View>
};

const styles = StyleSheet.create({});

export default HomeScreen;
