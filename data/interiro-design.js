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
    "https://newdelightinteriors.com/images/services/service-single/Delight-Interiors-False-Ceiling-Slid-2.jpg",
    "https://3.imimg.com/data3/XK/OS/ANDROID-9094127/fb_img_1435162657450-500x500.jpg",
    "https://i.pinimg.com/originals/15/e3/5e/15e35eed0eef7432d440ecfb840afc5d.jpg",
    "https://i.pinimg.com/originals/ba/b1/51/bab151d4d15ddfbaf3ea147bfbb41c7f.jpg",
    "https://kreatecube.com/usefull/vendor/25402/gallery/9470.jpg",
    "https://5.imimg.com/data5/RO/LF/MY-3857993/netlons-500x500.jpg",
    "https://5.imimg.com/data5/RO/LF/MY-3857993/netlons-500x500.jpg",
    "https://i.ytimg.com/vi/lNG8QSOyePU/maxresdefault.jpg",
    "https://i.pinimg.com/originals/79/b5/a1/79b5a19aec0205d59290867ac4d0d075.jpg",
    "https://apollo-singapore.akamaized.net/v1/files/wsar6ffmp7uk1-PK/image;s=1080x810",
    "https://grandinteriors.com.pk/wp-content/uploads/2019/08/IMG-20190720-WA0004.jpg",
    "https://4.imimg.com/data4/FM/MB/MY-34435323/img-20150406-wa0007-500x500.jpg",
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
    "https://img.edilportale.com/product-thumbs/b_6X6-CESARE-ROVERSI-342340-rel2b7994f0.jpg",
    "https://i.pinimg.com/originals/6c/96/f3/6c96f352ce3162b426e93b7bf2ad1bcf.jpg",
    "https://www.inoutsolutions.co.uk/wp-content/uploads/Full-height-glazed-partition-in-grey.jpg",
    "https://www.cheshireofficeinteriors.com/images/portfolio/services-3.jpg",
    "https://img.archiexpo.com/images_ae/photo-g/52836-9441033.jpg",
    "https://img.archiexpo.com/images_ae/photo-g/9765-11844699.jpg",
    "https://cdn.decoratorist.com/wp-content/uploads/contemporary-new-modern-modular-room-divider-partition-428040.jpg",
    "https://lh3.googleusercontent.com/proxy/K2Cdf2Bwp8XujVirzF1706JUhwUErSZQRBw3cVwTPhcYwHrQfk4FPITKMtrEZ4ULa-CLFeWqmWRxRj85FxWElNu0KeNXWTEYznLrgjPokF_dBCA61wh-FbBfYuttipi8t0D4jOdErFqLR-tyowuNyt8xxKE",
    "https://www.vblue.in/images/glass-aluminium-partition.jpg",
    "https://interiordesignernoida.in/images/projects/Aluminum-work-in-noida6.jpg",
    "https://lh3.googleusercontent.com/proxy/fnN0UthXifMJE_UujpPQv8KAnRjF76KEW9zXU0Bn_5cRYCLxBodtfnyxe-meyetT1LPoqKjFUVGviyMyPcggvdna4VbBC1ZYCu2nY6IKA_RZiNZMA_wXvtfa-e3toGftLl8",
    "https://tiimg.tistatic.com/fp/1/005/703/aluminium-partitions-for-offices-004.jpg",
    "https://lh3.googleusercontent.com/proxy/abDeqTjBJW6637ZTsMjOxFpL6699cksUWnrHv22bRUmYb-Gou9hList1nZdXkWxdsG-3IKqKV7BqRm07yWwPIYRrvP2cZEVYkCycEyjlolMtmNfqN9nsnmOb3KLdOqOornA",
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2Ps0BzWxKTJealUVAv2lG9DMwtBdvK-s9NA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2Ps0BzWxKTJealUVAv2lG9DMwtBdvK-s9NA&usqp=CAU",
    "https://tiimg.tistatic.com/fp/1/004/198/grid-false-ceiling-261.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThUF4OTViazVUdci3X7KY1IdHw97YgPN1kiQ&usqp=CAU",
    "https://5.imimg.com/data5/KQ/CZ/AM/SELLER-68238913/grid-false-ceiling-500x500.jpg",
    "https://www.diamondtm.net/files/albumsmodule/5efd92d199a9b/album66/GRG_Fully_Perforated_Tiles.jpg",
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
    "https://www.bnbassociates.co.in/assets/img/gypsum-glass-wooden-partitions/06.jpg",
    "https://3.imimg.com/data3/OT/GA/MY-4315176/gypsum-board-partitions-500x500.jpg",
    "https://3.imimg.com/data3/HX/SD/MY-14192011/glass-glazed-partition-500x500.jpg",
    "https://laperla-london.com/wp-content/uploads/2017/11/Office-Dividers-Wall.jpg",
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
    "https://gta-railings.com/wp-content/uploads/2017/12/127.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVDIkpCJoWRX6GiREVkxZdWw0mSdZRQ2Un7w&usqp=CAU",
    "https://d1hy6t2xeg0mdl.cloudfront.net/image/394876/dedb8aee39/standard",
    "https://hg-images.condecdn.net/image/45MZNpXvRMD/crop/1020/f/hall-1-house-8mar18-paul-massey.jpg",
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
    "https://www.jeld-wen.co.uk/getmedia/0e4c8bd6-ef8d-48ea-949e-4cf7ce3fdac7/Veneer-White-Oak-Twin-Inlay_01_2560-wide.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9EutAC42AqYK4TREWemqfRsj1Pglvj9lEtw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2oACjwT5Is22PQQf_saiuV8Kg5cDNeTRlkA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ4jXJRirJRVxAaRHK2alvYr-wieFkToogPg&usqp=CAU",
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV8SmT0ssD09ieLryiCBks1SOx9wlpp_Q7HA&usqp=CAU",
    "https://i.pinimg.com/736x/1b/12/a3/1b12a3c504830b1478a099f5cba43f11.jpg",
    "https://www.recommend.my/blog/wp-content/uploads/2018/03/Living1-W01--1000x666.jpg",
    "https://www.architectureartdesigns.com/wp-content/uploads/2014/02/550.jpg",
    "https://i.pinimg.com/originals/dc/f7/e0/dcf7e0fc2523cbb04845856a87bb9269.jpg",
    "https://i.pinimg.com/originals/9a/4d/e8/9a4de85d07bf35f693b84766da960480.jpg",
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
    "https://www.mymove.com/wp-content/uploads/2020/07/window-creativity-view-bedroom.jpg",
    "https://secureservercdn.net/45.40.155.175/f73.7de.myftpupload.com/wp-content/uploads/2016/07/Broken-Window-Interior-Design.jpg",
    "https://cdn.homedit.com/wp-content/uploads/2017/01/Living-room-with-black-window-frames.jpg",
    "https://decorinteriorsus.com/blog/wp-content/uploads/2020/02/english-country.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/13879rem-chau-au-02.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/95/b8/53/95b8535dd7024a920399d40bc16808ef.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61gWORmFXgL._AC_SX522_.jpg",
    "https://www.theblindssource.com/wp-content/uploads/2019/09/1st-1-406x486.jpg"
  ].map((val, index) => {
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
