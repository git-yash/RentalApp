import React from 'react';
import {FlatList} from 'react-native';
import CategoryTabBarItem from '../CategoryTabBarItem/CategoryTabBarItem';

const CategoryTabBar = (props: {
  whichCategorySelected: string | undefined;
  setWhichCategorySelected: any;
  categoryItems: any;
}) => {
  return (
    <FlatList
      horizontal={true}
      style={{paddingBottom: 5}}
      showsHorizontalScrollIndicator={false}
      data={props.categoryItems}
      renderItem={({item, index}) => (
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
