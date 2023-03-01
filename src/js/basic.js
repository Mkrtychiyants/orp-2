export default function displayAttacks(char) {
  const { special: attack } = char;
  for (let index = 0; index < attack.length; index += 1) {
    if (!Object.keys(attack[index]).includes('description')) {
      attack[index].description = 'Описание недоступно';
    }
  }
  return attack;
}
