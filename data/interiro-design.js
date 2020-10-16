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

const false_ceiling = () => {
  return [
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling01.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling02.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling03.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling04.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling05.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling06.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling07.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling08.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling09.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling010.png'),
    construct_image_url('./marichmodulars-product-images/False-Ceiling/False-Ceiling011.png'),
    
  ].map((val, index) => {
    return {
      key: "false-ceiling",
      label: `False-Ceiling-#001${index}`,
      imageurl: val,
    };
  });
};
const aluminium_partition = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition01.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition02.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition03.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition04.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition05.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition06.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition07.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition08.png'),
    construct_image_url('./marichmodulars-product-images/Aluminium-Partition/Aluminium-Partition09.png'),
  ].map((val, index) => {
    return {
      key: "aluminium-partition",
      label: `Aluminium-Partition-#001${index}`,
      imageurl: val,
    };
  });
};
const grid_false_ceiling = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Grid-False-Ceiling/Grid-False-Ceiling01.png'),
  ].map((val, index) => {
    return {
      key: "grid-false-ceiling",
      label: `Grid-False-Ceiling-#001${index}`,
      imageurl: val,
    };
  });
};

const gypsum_partition = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Gypsum-Partition/Gypsum-Partition01.png'),
    construct_image_url('./marichmodulars-product-images/Gypsum-Partition/Gypsum-Partition02.png'),
    construct_image_url('./marichmodulars-product-images/Gypsum-Partition/Gypsum-Partition03.png'),
    construct_image_url('./marichmodulars-product-images/Gypsum-Partition/Gypsum-Partition04.png'),
  ].map((val, index) => {
    return {
      key: "gypsum-partition",
      label: `Gypsum-Partition-#001${index}`,
      imageurl: val,
    };
  });
};

const stairs = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Stairs/Stairs01.png'),
    construct_image_url('./marichmodulars-product-images/Stairs/Stairs02.png'),
    construct_image_url('./marichmodulars-product-images/Stairs/Stairs03.png'),
    
  ].map((val, index) => {
    return {
      key: "stairs",
      label: `Stairs-#001${index}`,
      imageurl: val,
    };
  });
};

const doors = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Doors/Doors01.png'),
  ].map((val, index) => {
    return {
      key: "doors",
      label: `Doors-#001${index}`,
      imageurl: val,
    };
  });
};

const walls = () => {
  return [
    construct_image_url('./marichmodulars-product-images/Walls/Walls01.png'),
    construct_image_url('./marichmodulars-product-images/Walls/Walls02.png'),
    construct_image_url('./marichmodulars-product-images/Walls/Walls03.png'),
    construct_image_url('./marichmodulars-product-images/Walls/Walls04.png'),
  ].map((val, index) => {
    return {
      key: "walls",
      label: `Walls-#001${index}`,
      imageurl: val,
    };
  });
};

const windows = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Windows/Windows01.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows02.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows03.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows04.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows05.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows06.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows07.png`),
    construct_image_url(`./marichmodulars-product-images/Windows/Windows08.png`),
  ]
  .map((val, index) => {
    return {
      key: "windows",
      label: `Windows-#001${index}`,
      imageurl: val,
    };
  });
};

const all_interior = {
  filters: [
    { key: "*", label: "All", class: "selected" },
    { key: ".false-ceiling", label: "False Ceiling" },
    { key: ".aluminium-partition", label: "Aluminium Partition" },
    { key: ".gypsum-partition", label: "Gypsum Partition" },
    { key: ".grid-false-ceiling", label: "Grid False Ceiling" },
    { key: ".stairs", label: "Stairs" },
    { key: ".doors", label: "Doors" },
    { key: ".walls", label: "Walls" },
    { key: ".windows", label: "Windows" },
  ],
  dataImages: shuffle([
    ...false_ceiling(),
    ...aluminium_partition(),
    ...grid_false_ceiling(),
    ...gypsum_partition(),
    ...stairs(),
    ...doors(),
    ...walls(),
    ...windows(),
  ]),
};
