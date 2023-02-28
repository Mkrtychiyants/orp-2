import orderByProps from '../basic';

test('should sum', () => {
  const obj1 = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj1, ['name', 'level']);
  const result2 = orderByProps(obj1);

  expect(result).toStrictEqual(([{ key: 'name', value: 'мечник' }, { key: 'level', value: 2 }, { key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }]));
  expect(result2).toStrictEqual(([{ key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }]));
});
