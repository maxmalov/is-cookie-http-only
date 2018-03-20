import assert from 'assert';
import Cookies from 'js-cookie';
import isCookieHttpOnly from '../main';

const SECRET_TESTEM_COOKIE = 'io';

it('should be a function', () => {
  assert.equal(typeof isCookieHttpOnly, 'function');
});

it('should detect http only cookie', () => {
  assert.strictEqual(isCookieHttpOnly(SECRET_TESTEM_COOKIE), true);
});

it('should detect non http only cookie', () => {
  assert.strictEqual(isCookieHttpOnly('test'), false);
});

it('should clean up tmp cookie', () => {
  isCookieHttpOnly('test12');
  assert.strictEqual(Cookies.get('test12'), undefined);
});
