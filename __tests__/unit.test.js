// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//numbers
test('validnumber1', () => {
  expect(isPhoneNumber("(619) 457-9788)")).toBe(true);
});

test('validnumber2', () => {
  expect(isPhoneNumber("(858)370-2796")).toBe(true);
});

test('invalidtype', () => {
  expect(isPhoneNumber(619-457-9788)).toBe(false);
});

test('invalidnumber', () => {
  expect(isPhoneNumber('abcde')).toBe(false);
});

//emails
test('validemail1', () => {
  expect(isEmail("arg030@ucsd.edu")).toBe(true);
});

test('validemail2', () => {
  expect(isEmail("k6singh@gmail.com")).toBe(true);
});


test('no@sign', () => {
  expect(isEmail("k6singhgmail.com")).toBe(false);
});


test('wrongending', () => {
  expect(isEmail("k6singhgmail")).toBe(false);
});

//password
test('validpassword1', () => {
  expect(isStrongPassword("four")).toBe(true);
});

test('validpassword2', () => {
  expect(isStrongPassword("Ihopethisworks")).toBe(true);
});

test('shortpassword', () => {
  expect(isStrongPassword("bad")).toBe(false);
});

test('wrongstartchar', () => {
  expect(isStrongPassword("1hello")).toBe(false);
});

//date
test('validdate1', () => {
  expect(isDate("1/3/2005")).toBe(true);
});

test('validdate2', () => {
  expect(isDate("06/12/2005")).toBe(true);
});

test('invalidnorder', () => {
  expect(isDate("2005/12/06")).toBe(false);
});

test('invalidtype', () => {
  expect(isDate("mar/12/2020")).toBe(false);
});

//hex
test('validcolor1', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('validcolor2', () => {
  expect(isHexColor("#00F020")).toBe(true);
});

test('missingdigits', () => {
  expect(isHexColor("0F020")).toBe(false);
});

test('toomanydigits', () => {
  expect(isHexColor("#00F0200")).toBe(false);
});