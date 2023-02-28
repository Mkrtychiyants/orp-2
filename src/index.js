// import './css/style.css';

// import './js/app';

// TODO: write your code in app.js
const obj1 = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

function orderByProps(obj, order) {
  let optArray = [];
  let neworder = [];
  const optArray2 = [];
  if (order) {
    for (const key in obj) {
      if (!order.includes(key)) {
        optArray.push(key);
      }
    }
    optArray.sort();
    neworder = order.concat(optArray);
  } else {
    optArray = Object.keys(obj);
    neworder = optArray.sort();
  }
  for (let index = 0; index < neworder.length; index += 1) {
    const newObj = {};
    const { [neworder[index]]: newValue } = obj;
    newObj.key = `${neworder[index]}`;
    newObj.value = newValue;
    optArray2.push(newObj);
  }
  console.log(optArray2);
}
orderByProps(obj1, ['name', 'level', 'defence']);
// orderByProps(obj1);
