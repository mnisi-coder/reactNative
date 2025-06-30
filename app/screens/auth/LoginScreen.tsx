import { Formik } from 'formik';
import React, { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { useAuth } from '../../context/AuthContext';


export default function LoginScreen() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const { login } = useAuth();


// this function will be called when the form is submitted
 function submitvalues(values:any)
  {
    console.log("Submitted Values:");
    
    console.log(values);
  };

  return (

    <View style={styles.formsize}>

      <Image
        source={require('../../../assets/images/icon.png')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      
        <Formik 
        

        onSubmit={(values) => {
        login(username)
          submitvalues(values)
        
        } }
        initialValues={{  setUsername: '', password: '' }}
       
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
       
        
            
            <TextInput
              placeholder="Enter username"
              // onChangeText={text => console.log(text)} // track the input value
            //   onChangeText={handleChange('setUsername')}
             onChangeText={setUsername}
              onBlur={handleBlur('email')}
               value={username}
              autoCapitalize="none"
              autoComplete="setUsername"
              autoCorrect={false}
              style={styles.formInptut}
              />
              
              <TextInput
              placeholder="Enter your password"
              secureTextEntry
              // onChangeText={text => console.log(text)} // track the input value
              onChangeText={setPassword}
              onBlur={handleBlur('password')}
              style={styles.formInptut}
              value={password}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
            />
              
            
              <View style={{ marginTop: 20 }}>
                <Button title="login" onPress={() => login(username, password)} />
              </View>  

             

              
              </>
        )}
        </Formik>

       
    </View>


  );
}



// style sheet 

const styles = StyleSheet.create({
  formInptut: {
     borderWidth: 1, 
      padding: 10, 
      margin: 10, 
      borderRadius: 5,
      borderColor: '#ccc',
      width: '80%',
      backgroundColor: '#fff',},
      formsize: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
      }

});