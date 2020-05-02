import React from 'react';
import {FlatList} from 'react-native';
import RadioButton, {Item} from './RadioButton';

export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};

const RadioGroup = (props: RadioGroupProps) => {
  const {items, selected, onSelected} = props;
  return (
    <FlatList
      horizontal={true}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <RadioButton item={item} selected={selected} onSelected={onSelected} />
      )}
    />
  );
};
export default RadioGroup;
