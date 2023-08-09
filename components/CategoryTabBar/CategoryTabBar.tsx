import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CategoryTabBarItem from '../CategoryTabBarItem/CategoryTabBarItem';

const CategoryTabBar = () => {
  const [whichCategorySelected, setWhichCategorySelected] =
    useState('Lawn Equipment');
  const categoryItems = [
    {
      iconName: 'grass',
      name: 'Lawn Equipment',
    },
    {
      iconName: 'construction',
      name: 'Power Tools',
    },
    {
      iconName: 'devices',
      name: 'Electronics',
    },
    {
      iconName: 'pool',
      name: 'Pool Equipment',
    },
    {
      iconName: 'sports-basketball',
      name: 'Sports',
    },
    {
      iconName: 'hiking',
      name: 'Outdoors',
    },
    {
      iconName: 'home',
      name: 'Home',
    },
    {
      iconName: 'outdoor-grill',
      name: 'Cooking',
    },
    {
      iconName: 'group-work',
      name: 'Other',
    },
  ];
  return (
    <FlatList
      horizontal={true}
      style={{paddingBottom: 5}}
      showsHorizontalScrollIndicator={false}
      data={categoryItems}
      renderItem={({item}) => (
        <CategoryTabBarItem
          label={item.name}
          iconName={item.iconName}
          isSelected={item.name === whichCategorySelected}
          setWhichCategorySelected={setWhichCategorySelected}
        />
      )}
    />
  );
};

export default CategoryTabBar;
