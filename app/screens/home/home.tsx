import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';



const HomeScreen = () => {
  const { user } = useAuth();
// 
  return (
    

        
    <View style={styles.container}>
        <>
            <View style={styles.top}>
                <Image
                    source={require('../../../assets/images/back.png')}
                    style={{ width: '100%', height: '100%'}}
                />


            </View>

            <View style={styles.bottom}>

            
                <Pressable>
                    <View style={styles.cards}>
                        <Text>Shift Logger</Text>

                    </View>
                </Pressable>
                
                <Pressable>
                <View style={styles.cards}>

                    <Text>Claim</Text>
                </View>
                </Pressable>

<               Pressable>
                <View style={styles.cards}>
                    <Text>
                        Notifications
                    </Text>
                </View>
                </Pressable>
                
                <Pressable>
                <View style={styles.cards}>
                    <Text>
                        Issue
                    </Text>
                </View>

                </Pressable>
            </View>
        
        </>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  top:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
    height: "80%", 
    width: '100%',
  },
bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: "20%", 
    maxHeight: 300, 
    width: '100%',
    padding: 20,
    backgroundColor: '#f2f3f4', 
  },
cards:{
        marginTop: 20,
        backgroundColor: '#ffff',
        height: 100,
        width: 150,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#005f6c', // blue shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    }
  }
);
