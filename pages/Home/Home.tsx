import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { s } from "./Home.style";

import Txt from "../../components/Txt/Txt";

const Home = () => {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt>Basic Weather Info</Txt>
      </View>
      <View style={s.searchbar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advance weather info</Txt>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
