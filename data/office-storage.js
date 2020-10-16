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
  const steel_storage = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/Steel-Storage/Steel-Storage01.png`),
      construct_image_url(`./marichmodulars-product-images/Steel-Storage/Steel-Storage02.png`),
      construct_image_url(`./marichmodulars-product-images/Steel-Storage/Steel-Storage03.png`),
    ].map((val, index) => {
      return {
        key: "steel",
        label: `Steel Storage & Lockers-#01${index}`,
        imageurl: val,
      };
    });
  };
  const wooden_storage = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/Wooden-Storage/Wooden-Storage01.png`),
      construct_image_url(`./marichmodulars-product-images/Wooden-Storage/Wooden-Storage02.png`),
      construct_image_url(`./marichmodulars-product-images/Wooden-Storage/Wooden-Storage03.png`),
      construct_image_url(`./marichmodulars-product-images/Wooden-Storage/Wooden-Storage04.png`),
      construct_image_url(`./marichmodulars-product-images/Wooden-Storage/Wooden-Storage05.png`),
    ].map((val, index) => {
      return {
        key: "wooden",
        label: `Wooden Storage-#001${index}`,
        imageurl: val,
      };
    });
  };
  
  const all_modular_workstation = {
    filters: [
      { key: "*", label: "All", class:"selected"},  
      { key: ".steel", label: "Steel Storage & Lockers" },
      { key: ".wooden", label: "Wooden Storage" },
    ],
    dataImages: shuffle([...steel_storage(), ...wooden_storage()]),
  };
  