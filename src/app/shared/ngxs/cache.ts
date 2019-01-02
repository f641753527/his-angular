export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  const value = localStorage.getItem(key);
  let data;
  try {
    data = JSON.parse(value);
  } catch (error) {
    data = '';
  }
  return data;
}