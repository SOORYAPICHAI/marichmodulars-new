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
      "https://i.pinimg.com/originals/e8/48/d5/e848d5c0cb4534b2d54cde657732c76e.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51h8EcpNdQL._SL1002_.jpg",
      "https://lh3.googleusercontent.com/proxy/DYBAsSe9-pTtnpDjN0Pg-tpbfwkcL2dAGC5LFcaGU0uVZbLOW-V9tC5ds4827Utm0HMQIZVgr6-QWJXrx7BPZ6a97_vB8jpsaNhYBotfXZQWGe512MkJAJcKcHWrRYPxqsCXUodYJysR2qZZkptcFGF1fMvdkE9iu6vZig",
      "https://www.cluster2.hostgator.co.in/files/writeable/uploads/hostgator32578/image/book-shelf-500x500.jpg1.jpg",
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
      "https://2.bp.blogspot.com/-uz831S41FEI/WgQIFeCXyGI/AAAAAAAAA4M/bCBUtgv0F6UJxyQiBTMTTR5aqF-eFENdgCLcBGAs/s1600/modular-storage-furniture.jpg",
      "https://buildingandinteriors.com/wp-content/uploads/2019/09/gk1.jpg",
      "https://www.apinterio.com/wp-content/uploads/2019/12/Modular-Office-Furniture-Pune.jpg",
      "https://andysterns.com/wp-content/uploads/2017/06/blog-1.jpg",
      "https://aoli.s3.amazonaws.com/products/3444/coegraydek__aoli_large.jpg",
      "https://www.talimarsystems.com/wp-content/uploads/2016/09/files-and-storage-talimar-systems.jpg"
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
  