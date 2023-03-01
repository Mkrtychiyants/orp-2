const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

function displayAttacks(char) {
  const { special: attack } = char;
  for (let index = 0; index < attack.length; index += 1) {
    if (!Object.keys(attack[index]).includes('description')) {
      attack[index].description = 'Описание недоступно';
    }
  }
  return attack;
}
displayAttacks(character);
