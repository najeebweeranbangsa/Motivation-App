import React, { useLayoutEffect, useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, StyleSheet, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
import { moods } from "../../data/dataArrays";
import { getNumberOfMotivations } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function CategoriesScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { fontWeight: "bold", textAlign: "center", alignSelf: "center", flex: 1,},
      headerLeft: () => (<MenuImage onPress={() => { navigation.openDrawer(); }}/>),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        {/* <Text style={styles.categoriesInfo}>{getNumberOfMotivations(item.id)} motivations</Text> */}
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <Text style={styles.welcomeText}>MOOD TRACKER</Text>
      <FlatList data={moods} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
};

