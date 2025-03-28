import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Borger3 from '../assets/image/Borger3.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={Borger3} style={styles.mainImage} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Rating Section */}
      

      {/* Item Details Section */}
      <View style={{backgroundColor:'#F5F5F5',padding:10,borderRadius:20}}>
      <View style={styles.box1}>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.itemName}>BURGER</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>⭐ 4.9 (3k+ Ratings)</Text>
            </View>
        </View>
      </View>
      <View>
        <Text style={styles.itemPrice}>$28</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>02</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

        {/* Delivery Address Section */}
        <View style={{flexDirection: 'row', gap:10}}>
        <TouchableOpacity style={styles.deliveryContainer}>
          <Text style={styles.deliveryAddress}>Delivery Address</Text>
          <Text style={styles.deliveryLocation}>Dhaka, Bangladesh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#A9A6FF',
          width:'20%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          marginVertical: 16,
          borderRadius:20}}>
            <Icon name="map" size={30} color="black" />
         </TouchableOpacity>
         </View>

        {/* Payment Method Section */}
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentMethod}>💳 Payment Method</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Checkout Summary Section */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>
          <View style={styles.box1}>
            <Text style={styles.summaryItem}>Subtotal (2)</Text>
            <Text style={{color:'black',fontSize:18}}>$56</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.summaryItem}>Delivery Fee</Text>
            <Text style={{color:'black',fontSize:18}}>$6.20</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.summaryTotal}>Payable Total</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#4A43EC'}}>$62.20</Text>
          </View>
        </View>

        {/* Confirm Order Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
  },
  box1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#f00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  ratingContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  rating: {
    fontSize: 14,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7D78F1',
    marginVertical: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  deliveryContainer: {
    backgroundColor: '#C0EADB',
    width:'70%',
    alignItems: 'left',
    justifyContent: 'center',
    height: 70,
    marginVertical: 16,
    borderRadius:20
  },
  deliveryAddress: {
    paddingLeft:10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  deliveryLocation: {
    paddingLeft:10,
    fontSize: 14,
    color: '#555',
  },
  changeButton: {
    marginTop: 8,
  },
  changeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  paymentMethod: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryContainer: {
    marginVertical: 16,
  },
  summaryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryItem: {
    fontSize: 20,
    color: '#818181',
  },
  summaryTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#4A43EC',
    padding: 16,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 16,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Cart;