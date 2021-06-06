import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import ResultShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
  {
    Search : SearchScreen,
    ResultShow : ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Serach Screen",
    },
  }
);

export default createAppContainer(navigator);
