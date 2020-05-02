import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import I18n from './src/lang/_i18n';
import {Item} from './src/components/RadioButton';
import RadioGroup from './src/components/RadioGroup';

const App = () => {
  const items: Item[] = [
    {id: 'system', name: 'System'},
    {id: 'en', name: 'English'},
    {id: 'tr', name: 'Turkish'},
    {id: 'ar', name: 'Arabic'},
  ];
  console.log(items);

  const [selected, setSelected] = useState<Item>(items[0]);
  const onSelected = (item: Item) => {
    setSelected(item);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {I18n.t(
              'hello',
              selected.id === 'system' ? {} : {locale: selected.id},
            )}
          </Text>
        </View>
        <View style={styles.bottomBar}>
          <RadioGroup
            selected={selected}
            onSelected={onSelected}
            items={items}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
  bottomBar: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
