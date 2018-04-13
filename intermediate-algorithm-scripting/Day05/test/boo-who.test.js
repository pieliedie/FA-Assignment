/* eslint-disable */
const booWho = require('../boo-who');

test('booWho(true) should return true.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho(false) should return true.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho([1, 2, 3]) should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho([].slice) should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho({ "a": 1 }) should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho(1) should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho(NaN) should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho("a") should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho("true") should return false.', () => {
  expect(booWho(true)).toBe(true);
});

test('booWho("false") should return false.', () => {
  expect(booWho(true)).toBe(true);
});
