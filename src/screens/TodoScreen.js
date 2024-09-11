import { StyleSheet, Text, TouchableOpacity, View , Button, TextInput, SafeAreaView, FlatList} from 'react-native'
import React, { useState } from 'react'
// import { FlatList } from 'react-native-gesture-handler'
// import { TextInput } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'



const TodoScreen = () => {
    const [toDo, setToDo]=useState('')
    const [todoList, setToDoList]=useState([])
    const [ updateToDo, setupdateToDo] =useState(null)


   

    const handleAddToDo=()=>{
        // setToDo([...toDo, {id: Math.random().toString(), title: toDo}
        //     ])
         setToDo('')
        setToDoList([...todoList,{id: Date.now().toString(), title: toDo}])
       

    }
    const handleDeleteToDo=(id)=>{
        const updatedToDoList = todoList.filter((toDo)=> toDo.id !== id)
        setToDoList(updatedToDoList)
          //  setToDo('')
        // setToDoList([...todoList,{id: Date.now().toString(), title: toDo}])

    }
    const handleUpdateToDo=(toDo)=>{
        setupdateToDo(toDo)
        setToDo(toDo.title)

    }
    const handleEditedToDo = ()=>{
        const updatedTodods = todoList.map((item)=>{
            if(item.id === updateToDo.id){
                return {...item, title: toDo}
        }
        return item
       
     } )
     setToDoList(updatedTodods)
     setupdateToDo(null)
     setToDo('')
    
}

    const renderTodo = ({item, index})=>{
        return(
            <View style={styles.dataStyle}>
                   <Text>{item.title}</Text>
                <IconButton icon='pencil' style={styles.pencil} onPress={()=>handleUpdateToDo(item)}/>
                <IconButton icon='delete' style={styles.pencil} onPress={()=>handleDeleteToDo(item.id)}/>
             
            </View>
            
        )
    }


 return(
    
 <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='add a task' value={toDo} onChangeText={(userText)=>setToDo(userText)
        }/>

    </View>
    <View style={styles.buttonContainer}>
       {
        updateToDo ? (
            <TouchableOpacity style={styles.btn} onPress={()=>handleEditedToDo()}>
            <Text style={styles.btnText}>SAVE</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.btn} onPress={()=>handleAddToDo()}>
            <Text style={styles.btnText}>ADD </Text>
            </TouchableOpacity>
        )
       }
    </View>
    <FlatList data={todoList} renderItem={renderTodo}/>

 </SafeAreaView>
    
  )
}

export default TodoScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'#f8f9fa',
        padding:16,
    },
  
    btn:{
        backgroundColor:'#800000',
        alignItems:'center',
        // borderWidth:1,
        borderRadius:6,
        height:40,
        width:100,
        alignSelf:'center'
        

    },
    dataStyle:{
        backgroundColor:'gray',
        // marginTop:6,
        borderRadius:6,
        height:50,
        alignItems:'center',
        marginVertical:14,
        flex:1,
        justifyContent:'space-around',
flexDirection:'row',
shadowColor:'red',
shadowOffset:{width:5, height:5},
shadowOpacity:1,

    },
    btnText:{
        color:'white',
        justifyContent:'center',
        padding:1,
        fontSize:10,
        marginTop:6,
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginBottom:20,
    },
    input:{
        flex:1,
        borderColor: '#800000',
        borderWidth: 1,
        padding:10,

    }
})