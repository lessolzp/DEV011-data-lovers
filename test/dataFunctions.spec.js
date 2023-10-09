import { filterData } from '../src/dataFunctions.js';
import { sortData } from '../src/dataFunctions.js';
import { peopleData } from '../src/dataFunctions.js';
import { data } from './data.js';

//console.log(fakeData);
const propertieExample1 = "producer";
const valueExample1 = "Toru Hara";
const resultExample1 = ['Grave of the Fireflies'];
const propertieExample2 = "director";
const valueExample2 = "Isao Takahata";
const propSortExample2 = "rt_score";
const orderExample2 = "desc";
const resultExample2 = ['The Tale of the Princess Kaguya', 'Only Yesterday', 
  'Grave of the Fireflies', 'Pom Poko', 'My Neighbors the Yamadas'];
const propertieExample3 = "title";
const valueExample3 = "Kiki's Delivery Service";
const resultExample3 = ['Kiki', 'Jiji', 'Ursula', 'Tombo', 'Osono', 'Fukuo'];
const propertieExample4 = "director";
const valueExample4 = "Hiromasa Yonebayashi";
const propSortExample4 = "rt_score";
const orderExample4 = "asc";
const resultExample4 = ['When Marnie Was There', 'The Secret World of Arrietty'];

describe('filterData', () => {
  const dataTest = filterData(data, propertieExample1, valueExample1);
  const resultTest = dataTest.map((film)=>{
    return film.title;
  });
  it('Debería retornar "Grave of the Fireflies" para la propiedad "producer" y el valor "Toru Hara"', () => {
    expect(resultTest).toEqual(resultExample1)
  })
});

describe('sortData', () => {
  const dataTest = filterData(data, propertieExample2, valueExample2);
  const sortedDataTest = sortData(dataTest, propSortExample2, orderExample2);
  const resultTest = sortedDataTest.map((film)=>{
    return film.title;
  });

  it('Debería retornar un array "[]" para la propiedad "director" y el valor "Isao Takahata" ordenado por "ranking score" de forma "desc"', () => {
    expect(resultTest).toEqual(resultExample2);
  });
});

describe('sortData', () => {
  const dataTest = filterData(data, propertieExample4, valueExample4);
  const sortedDataTest = sortData(dataTest, propSortExample4, orderExample4);
  const resultTest = sortedDataTest.map((film)=>{
    return film.title;
  });

  it('Debería retornar un array "[]" para la propiedad "director" y el valor "Hiromasa Yonebayashi" ordenado por "ranking score" de forma "asc"', () => {
    expect(resultTest).toEqual(resultExample4);
  });
});

describe('peopleData',()=>{
  const dataTest = filterData(data, propertieExample3, valueExample3);
  const resultTest = peopleData(dataTest[0]);

  it('Deberìa retornar un array con los nombres "Kiki, Jiji, Ursula, Tombo, Osono, Fukuo"', ()=>{
    expect(resultTest).toEqual(resultExample3);

  });
});

