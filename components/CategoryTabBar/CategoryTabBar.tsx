import React from 'react';
import {FlatList} from 'react-native';
import CategoryTabBarItem from '../CategoryTabBarItem/CategoryTabBarItem';
import Util from '../../Util';

const CategoryTabBar = (props: {
  whichCategorySelected: number;
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
          index={index}
          label={item.name}
          iconName={item.iconName}
          isSelected={
            item.name ===
            Util.getCategoryTextFromIndex(props.whichCategorySelected)
          }
          setWhichCategorySelected={props.setWhichCategorySelected}
        />
      )}
    />
  );
};

export default CategoryTabBar;
