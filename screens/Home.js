import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the local images
import UserImage from '../assets/image/avt_1.jpeg';
import Borgerimg from '../assets/image/borger.png';
import BurgerImage from '../assets/image/borger2.png';
import PizzaImage from '../assets/image/bizza.png';
import PopularItemsList from '../components/FlatlistComponent2'; // Import the flatlist component

const DATA = [
  {
    id: '1',
    title: 'Burger',
    image: BurgerImage,
  },
  {
    id: '2',
    title: 'Pizza',
    image: PizzaImage,
  },
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Home Title */}

      {/* Header Section */}
      <View style={styles.header}>
        <Image source={UserImage} style={styles.userImage} />
        <View>
        <Text style={{color:'#818181'}}>Your location</Text>
        <Text>Savar, Dhaka</Text>
        </View>
        <Icon name="notifications" size={40} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter-list" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {/* Pizza Button */}
          <TouchableOpacity style={styles.selectedbutton}>
            <Icon name="local-pizza" size={30} color="#333" /> {/* Pizza Icon */}
            <Text style={styles.label}>Pizza</Text>
          </TouchableOpacity>

          {/* Burger Button */}
          <TouchableOpacity style={styles.button}>
            <Icon name="fastfood" size={30} color="#333" /> {/* Burger Icon */}
            <Text style={styles.label}>Burger</Text>
          </TouchableOpacity>

          {/* Drinks Button */}
          <TouchableOpacity style={styles.button}>
            <Icon name="local-drink" size={30} color="#333" /> {/* Drinks Icon */}
            <Text style={styles.label}>Drinks</Text>
          </TouchableOpacity>

          {/* Rice Button */}
          <TouchableOpacity style={styles.button}>
            <Icon name="rice-bowl" size={30} color="#333" /> {/* Rice Icon */}
            <Text style={styles.label}>Rice</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <Image source={Borgerimg}/>
      </View>

      {/* Popular Items using PopularItemsList */}
      <Text style={styles.exploreText}>Popular items</Text>
      <PopularItemsList data={DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A43EC',
    borderRadius: 70,
    paddingHorizontal: 10,
    marginVertical: 20,
    height: 80,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  container: {
    marginVertical: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding:20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  user: {
    fontSize: 14,
    color: '#555',
  },
  buttonsContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  selectedbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29D697',
    borderRadius: 10,
    width: 90,
    height: 90,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 90,
    height: 90,
  },
  label: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  statLine: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 3,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
});

export default Home;