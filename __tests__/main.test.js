import chai from 'chai';
import isCookieHttpOnly from '../main';

const { expect } = chai;
const SECRET_TESTEM_COOKIE = 'io';

it('should be a function', () => {
  expect(isCookieHttpOnly).to.be.a('function');
});

it('should detect http only cookie', () => {
  expect(isCookieHttpOnly(SECRET_TESTEM_COOKIE)).to.equal(true);
});

it('should detect non http only cookie', () => {
  expect(isCookieHttpOnly('test')).to.equal(false);
});
