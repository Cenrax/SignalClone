import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    page:{
      backgroundColor:"white"
    },
    container:{
      flexDirection:'row',
      padding: 10
    },
  
    rightContainer:{
      flex:1,
      justifyContent: 'center'
  
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  
    },
    badgeContainer:{
      height :20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#3872E9",
      position: "absolute",
      left: 45,
      top: 10
      
    },
    badgeText:{
      color: "white",
      fontSize: 12
    },
    
    name:{
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 5
    },
    text:{
      color: "grey",
      fontSize: 15
    },
    image:{
      height:50,
      width:50,
      borderRadius:30,
      marginRight: 10
    }
  })
  export default styles;