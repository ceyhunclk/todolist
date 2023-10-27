import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddBox from "./component/AddBox";
import Todo from "./component/todo";
import Counter from "./component/Counter";





const App = () => {
    const [todoData, todoDataSet] = useState([]);
    const [text, setText] = useState("");
    const [count, setcount] = useState(0);
    const [counter, setcounter] = useState(0);
    const checktodo = (itemId) => {
const newData = [...todoData];
newData[itemId].status=!newData[itemId].status;
       todoDataSet(newData);
    }
    const deletetodo = (itemId) => {
        const newData = [...todoData];
        newData.splice(itemId, 1)
        todoDataSet(newData);
    }
    const addHandle = () => {
        todoDataSet([...todoData, { "id": counter, "name": text, "status": false }]);
    }

    useEffect(() => {
        setcount(todoData.length);
        setcounter(counter + 1);
        console.log(todoData)
    }, [todoData])


    return (
        <SafeAreaView style={styles.body}><Counter count={count}></Counter>
            <FlatList data={todoData} renderItem={({ item, index }) => <Todo deletetodo={()=>deletetodo(index)} checktodo={() => checktodo(index)} items={item}></Todo>}></FlatList>
            <AddBox addHand={addHandle} setText={setText} />
        </SafeAreaView>
    )


}

export default App;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#102027",
        justifyContent: "space-between"

    }


})