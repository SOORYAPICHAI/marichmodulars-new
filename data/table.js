const construct_image_url = (url) =>{
  return `/data/${url}`
}
// RANDOMIZE AN ARRAY
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const office_table = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Office-Table/Office-Table01.png`),
    construct_image_url(`./marichmodulars-product-images/Office-Table/Office-Table02.png`),
    construct_image_url(`./marichmodulars-product-images/Office-Table/Office-Table03.png`),
    
  ].map((val, index) => {
    return {
      key: "office",
      label: `Office-table-#01${index}`,
      imageurl: val,
    };
  });
};
const computer_table = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Computer-Table/Computer-Table01.png`),
    construct_image_url(`./marichmodulars-product-images/Computer-Table/Computer-Table02.png`),
    construct_image_url(`./marichmodulars-product-images/Computer-Table/Computer-Table03.png`),
  ].map((val, index) => {
    return {
      key: "computer",
      label: `Computer-table-#001${index}`,
      imageurl: val,
    };
  });
};
const conference_table = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Conference-Table/Conference-Table01.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Table/Conference-Table02.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Table/Conference-Table03.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Table/Conference-Table04.png`),
  ].map((val, index) => {
    return {
      key: "conference",
      label: `Conference-table-#001${index}`,
      imageurl: val,
    };
  });
};

const all_modular_tables = {
  filters: [
    { key: "*", label: "All", class: "selected" },
    { key: ".office", label: "Office" },
    { key: ".computer", label: "Computer" },
    { key: ".conference", label: "Conference" },
  ],
  dataImages: shuffle([...office_table(), ...computer_table(),...conference_table()]),
};
