// TODO: write your code here
import sum from './basic';

export default function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}

console.log('worked');

console.log(sum([1, 2]));
