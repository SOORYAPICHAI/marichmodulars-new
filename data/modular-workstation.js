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
const cluster_workstation = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Cluster-Workstation/Cluster-Workstation01.png`),
    construct_image_url(`./marichmodulars-product-images/Cluster-Workstation/Cluster-Workstation02.png`),
    construct_image_url(`./marichmodulars-product-images/Cluster-Workstation/Cluster-Workstation03.png`),
    construct_image_url(`./marichmodulars-product-images/Cluster-Workstation/Cluster-Workstation04.png`),
  ].map((val, index) => {
    return {
      key: "cluster",
      label: `Cluster-workstation-#01${index}`,
      imageurl: val,
    };
  });
};
const linear_workstation = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Linear-Workstation/Linear-Workstation01.png`),
    construct_image_url(`./marichmodulars-product-images/Linear-Workstation/Linear-Workstation02.png`),
    construct_image_url(`./marichmodulars-product-images/Linear-Workstation/Linear-Workstation03.png`),
    construct_image_url(`./marichmodulars-product-images/Linear-Workstation/Linear-Workstation04.png`),
  ].map((val, index) => {
    return {
      key: "linear",
      label: `Linear-workstation-#001${index}`,
      imageurl: val,
    };
  });
};

const all_modular_workstation = {
  filters: [
    { key: "*", label: "All", class:"selected"},  
    { key: ".linear", label: "Linear" },
    { key: ".cluster", label: "Cluster" },
  ],
  dataImages: shuffle([...cluster_workstation(), ...linear_workstation()]),
};
