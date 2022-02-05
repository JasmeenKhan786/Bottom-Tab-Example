import React from "react";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";

export default class Aboutus extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 200 }}>
        <Text style={{alignSelf:'center'}}>Aboutus Screen</Text>
        <TouchableOpacity
          style={{
            width: "80%",
            height: 40,
            alignSelf: "center",
            borderRadius: 20,
            marginTop:10,
            borderColor:'black',
            borderWidth:1, justifyContent:'center', alignItems:'center'
          }}
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          <Text>Go to Profile Screen</Text>
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
