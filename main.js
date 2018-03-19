import Cookies from 'js-cookie';

export default function(cookieName) {
  const value = Cookies.get(cookieName);
  if (value) {
    return false;
  }

  Cookies.set(cookieName, 'test');
  const test = Cookies.get('test');
  Cookies.remove('test');

  return !test;
}
