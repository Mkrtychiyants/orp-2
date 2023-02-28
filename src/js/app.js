// TODO: write your code here
import orderByProps from './basic';

const obj1 = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

console.log(orderByProps(obj1, ['name', 'level', 'defence']));
