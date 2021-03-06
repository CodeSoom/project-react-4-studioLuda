export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function saveObjItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadItem(key) {
  return localStorage.getItem(key);
}

export function loadObjItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}
