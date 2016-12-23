/* eslint no-undef: 0 */
import order from '../lib/order';

const input = [
  {
    type: 'Person',
    order: 1,
    name: 'Brian',
  },
  {
    type: 'Place',
    order: 2,
    name: 'Ohio',
  },
  {
    type: 'Place',
    order: 12,
    name: 'Ohio',
  },
  {
    type: 'Person',
    order: 14,
    name: 'Sarah',
  },
  {
    type: 'Person',
    order: 199,
    name: 'Sam',
  },
  {
    type: 'Person',
    order: 19,
    name: 'Eric',
  },
  {
    type: 'Place',
    order: 20,
    name: 'Home',
  },
];

const output = [
  {
    type: 'Person',
    order: 1,
    people: [
      'Brian',
    ],
  },
  {
    type: 'Place',
    order: 2,
    name: 'Ohio',
  },
  {
    type: 'Place',
    order: 12,
    name: 'Ohio',
  },
  {
    type: 'Person',
    order: 19,
    people: [
      'Sarah',
      'Eric',
    ],
  },
  {
    type: 'Place',
    order: 20,
    name: 'Home',
  },
  {
    type: 'Person',
    order: 199,
    people: [
      'Sam',
    ],
  },
];

test('order transforms input into output', () => {
  expect(JSON.stringify(order(input))).toBe(JSON.stringify(output));
});
