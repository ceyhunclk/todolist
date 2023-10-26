import React from "react";
import { Pressable, View, Text, Alert} from "react-native";
import styles from "./Todo.style";

const Todo=(props)=>{
return (
<View style={styles.body}>
    <Pressable onPress={props.complete}><Text style={styles.text}>{props.items.name}</Text></Pressable>
</View> 

)

}
export default Todo;