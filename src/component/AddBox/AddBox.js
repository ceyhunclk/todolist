import React from "react";
import { Button, TextInput, Touchable, View,Text, TouchableOpacity } from "react-native";
import styles from "./AddBox.style";
const AddBox =(props)=>{
return (
    <View style={styles.body}>
<TextInput onChangeText={newText=>props.setText(newText)} placeholderTextColor="#808080" placea placeholder="Yapılacak..." style={styles.inputtext}></TextInput>
<TouchableOpacity onPress={props.addHand}  style={styles.btnkaydet}><Text plac style={styles.btnkaydettext}>Kaydet</Text></TouchableOpacity>

    </View>
)


}
export default AddBox;