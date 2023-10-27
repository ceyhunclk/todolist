import React from "react";
import { Pressable, View, Text, Alert} from "react-native";
import styles from "./Todo.style";

const Todo=(props)=>{
return (
<View style={styles.body}>
    <Pressable onLongPress={props.deletetodo} onPress={props.checktodo}><Text style={props.items.status ? styles.text : styles.text2}>{props.items.name}</Text></Pressable>
</View> 

)

}
export default Todo;