import React from "react";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 200 }}>
        <Text style={{alignSelf:'center'}}>Home Screen</Text>
        <TouchableOpacity
          style={{
            width: "80%",
            height: 40,
            alignSelf: "center",
            borderColor:'black', 
            borderWidth:1,
            borderRadius: 20,
            marginTop:10,justifyContent:'center', alignItems:'center'
          }}
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          <Text >Go to Profile Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
