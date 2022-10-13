import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";
import splashImg from "./../../assets/images/splashImg.png";
import googleImg from "./../../assets/images/googleImg.png";
import addUserImg from "./../../assets/images/add-userImg.png";
import eyeImg from "./../../assets/images/eye.png";

const win = Dimensions.get("window");
function ForgotPassword({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(161, 49, 49, 1)", "rgba(60, 5, 5, 1)"]}
        style={styles.background}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Reset Password</Text>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>
            Set the new password for your account so you can login and access
            all the features.
          </Text>
        </View>
        <View style={styles.fieldCont}>
          <Text style={styles.label}>New Password</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            <Image source={eyeImg} />
          </Pressable>
          <Text style={styles.label}>Confirm Password</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            <Image source={eyeImg} />
          </Pressable>
        </View>

        <View style={styles.BtnCont}>
          <Pressable
            style={styles.Btn}
            onPress={() => navigation.navigate("loginMoni")}
          >
            <Text style={styles.BtnText}>Continue</Text>
          </Pressable>
        </View>

        {loading && <ActivityIndicator size="large" color="#fff" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A23131",
    height: win.height + win.height / 19,
    width: win.width,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: win.height / 1.2,
  },
  innerContainer: {
    // alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 16.5,
    marginVertical: win.height / 30,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#777777",
    paddingVertical: win.width / 30,
  },
  fieldCont: {
    marginVertical: win.height / 120,
  },
  optCont: {
    backgroundColor: "#FF6366",
    height: win.height / 15,
    width: win.width / 1.2,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: win.height / 150,
    borderRadius: win.width / 40,
    flexDirection: "row",
    paddingHorizontal: win.width / 50,
  },

  text: {
    color: "#777777",
  },
  textLink: {
    color: "#FFF",
    marginLeft: 10,
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.height / 50,

    alignItems: "center",
  },
  label: {
    color: "#F9DAE4",
    marginTop: win.height / 90,
  },
  BtnCont: {
    marginTop: win.height / 20,
  },
  Btn: {
    backgroundColor: "#F9DAE4",
    height: win.height / 15,
    width: win.width / 1.2,
    borderRadius: win.width / 40,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    color: "#FE3F47",
  },
  subheadingContainer: {
    width: win.width / 1.2,
    marginBottom: win.height / 30,
  },
  subheading: {
    paddingHorizontal: win.width / 20,
    color: "#F9DAE4",
    fontSize: win.width / 30,
    textAlign: "center",
  },
});

export default ForgotPassword;
