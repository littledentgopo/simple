const urlParams = new URLSearchParams(document.currentScript.src);
const key = urlParams.get('key');
const val = urlParams.get('val');
const op = urlParams.get('op');

console.log(op, key, val);

if (op == 'read') {
  const readVal = localStorage.getItem(key);
  console.log("readVal", key, readVal);
} else {
  localStorage.setItem(key, val);
}
