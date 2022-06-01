var languages = [
    'C#',
    'JavaScript',
    'Java',
    'PHP',
    'Typescript',
    'Dart',
];
/* for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
} */
/* let count: number = 0;

while (count < languages.length) {
  console.log(languages[count]);
  count++;
} */
languages.forEach(function (item) {
    if (item == 'Typescript') {
        return console.log('Encontrou');
    }
    console.log(item);
});
