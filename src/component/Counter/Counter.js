import React from "react";
import { Text, View } from "react-native";
import styles from "./Counter.style"


const Counter=(props)=>{
    return (
        <View style={styles.body}>
<Text style={styles.text} >Yapılacaklar </Text>
<Text style={styles.text}>{props.count}</Text>
</View>
    )

}

export default Counter;