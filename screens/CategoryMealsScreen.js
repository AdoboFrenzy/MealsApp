import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";
// import Meal from "../models/Meal";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return <MealItem itemData={itemData} onSelectMeal={() => {}} />;
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navData => {
  const catId = navData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
