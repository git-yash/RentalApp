import React from 'react';
import {FlatList} from 'react-native';
import CategoryTabBarItem from '../CategoryTabBarItem/CategoryTabBarItem';

const CategoryTabBar = (props: {
  whichCategorySelected: string;
  setWhichCategorySelected: any;
  categoryItems: any;
}) => {
  return (
    <FlatList
      horizontal={true}
      style={{paddingBottom: 5}}
      showsHorizontalScrollIndicator={false}
      data={props.categoryItems}
      renderItem={({item}) => (
        <CategoryTabBarItem
          label={item.name}
          iconName={item.iconName}
          isSelected={item.name === props.whichCategorySelected}
          setWhichCategorySelected={props.setWhichCategorySelected}
        />
      )}
    />
  );
};

export default CategoryTabBar;
