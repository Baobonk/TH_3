import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UserImage from '../assets/image/avt_1.jpeg'; // Import the avatar image
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation }) => {
  return ( // Make sure to return the JSX
    <View style={styles.container}>
      {/* Top Banner */}
      <View style={styles.banner} />

      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <Image
          source={UserImage} // Use the imported image
          style={styles.avatar}
        />
      </View>

      {/* Account Name and Role */}
      <Text style={styles.name}>Bao</Text>
      <Text style={styles.role}>vuanhtuan03042004@gmail.com</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Home Pressed')}>
          <Icon name="home" size={30} color="#333" /> {/* Home Icon */}
          <Text style={styles.optionLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('My Card Pressed')}>
          <Icon name="credit-card" size={30} color="#333" /> {/* My Card Icon */}
          <Text style={styles.optionLabel}>My Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Night Mode Pressed')}>
          <Icon name="nightlight-round" size={30} color="#333" /> {/* Night Mode Icon */}
          <Text style={styles.optionLabel}>Night Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Track My Order Pressed')}>
          <Icon name="local-shipping" size={30} color="#333" /> {/* Track My Order Icon */}
          <Text style={styles.optionLabel}>Track My Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Setting Pressed')}>
          <Icon name="settings" size={30} color="#333" /> {/* Setting Icon */}
          <Text style={styles.optionLabel}>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('Help Center Pressed')}>
          <Icon name="help-outline" size={30} color="#333" /> {/* Help Center Icon */}
          <Text style={styles.optionLabel}>Help Center</Text>
        </TouchableOpacity>
      </View>
      {/* Sign Out Button */}
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => null
        }
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'column', // Keep items in a vertical column
    alignItems: 'flex-start', // Align all items to the left
    marginVertical: 20,
    paddingLeft: 0, // Remove additional spacing
  },
  optionButton: {
    flexDirection: 'row', // Arrange text and arrow in a single row
    alignItems: 'center',
    justifyContent: 'flex-start', // Push everything to the left
    marginBottom: 15, // Add spacing between options
    width: '100%', // Ensure buttons stretch full width
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10, // Slight spacing between the icon and text for clarity
  },
  arrowIcon: {
    marginLeft: 'auto', // Push arrow icon to the far right
    marginRight: 10, // Add minimal spacing from the edge
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Neutral background for the rest of the screen
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 150, // Height of the banner
    backgroundColor: '#1E90FF', // Blue color for the banner
    borderBottomLeftRadius: 20, // Rounded corners at the bottom of the banner
    borderBottomRightRadius: 20,
    position: 'absolute', // Position at the top
    top: 0,
  },
  avatarContainer: {
    marginTop: 100, // Push down to overlap the banner
    width: 140,
    height: 140,
    borderRadius: 70, // Circular container for avatar
    backgroundColor: 'white', // White background for contrast
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Add shadow for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular avatar
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  role: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 15,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#4A43EC', // Red for sign-out button
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center' // Stretch button to full width
  },
  signOutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // White text for button
  },
});

export default Profile;