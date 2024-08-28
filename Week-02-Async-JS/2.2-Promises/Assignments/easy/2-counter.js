let count = 0;

function sync() {
  console.clear();
  console.log(count);
  count++;
  setTimeout(sync, 1000);
}
sync();
