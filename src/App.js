import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddBox from "./component/AddBox";
import Todo from "./component/todo";
import Counter from "./component/Counter";





const App=()=>{
const [todoData,todoDataSet]=useState([]);
const [text,setText]=useState("");
const [count,setcount]=useState(0);

const addHandle=()=>{
todoDataSet([...todoData,{"name":text,"status":false}]);
}

useEffect(()=>{
setcount(todoData.length);
},[todoData])


return (
<SafeAreaView style={styles.body}><Counter count={count}></Counter>
<FlatList data={todoData} renderItem={({item})=><Todo items={item}></Todo>}></FlatList>
<AddBox addHand={addHandle} setText={setText}/>
</SafeAreaView>
)


}

export default App;


const styles=StyleSheet.create({
body:{
flex:1,
backgroundColor:"#102027",
justifyContent:"space-between"
  
}


})