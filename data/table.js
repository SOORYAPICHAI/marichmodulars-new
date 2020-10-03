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
    "https://5.imimg.com/data5/XP/DJ/MY-1092175/modular-office-table-500x500.jpg",
    "https://image.made-in-china.com/202f0j00paNGSRVKHObQ/Modern-Furniture-Office-Modular-Office-Table-Desk-Workstation-L-Shape.jpg",
    "https://lh3.googleusercontent.com/proxy/q9WaLv1bgn3Vdl7Hoa9Ar9TBVFZSRMYpaoFZUT2liXR_kAdNhDuGd1IqcRN8H2rwIuJ-TuWWVcwkv3kWf63ROJRWG-LY5txDkearF7xd9WMUQyCuMCrDWzPS7yPwIlSZqDgjMariVxJ4gnOvJXGumbi6JPQEhRs7ew",
    "https://www.alfafurnituremart.com/wp-content/uploads/2018/09/Office-Table-Dealers-In-Panchkula.jpg",
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
    "https://img3.exportersindia.com/product_images/bc-full/dir_180/5397207/office-computer-table-1527493979-3912865.jpeg",
    "https://img.everychina.com/nimg/29/81/70073a5542a24d996659c2d3395d-600x600-0/1_4m_length_office_computer_desk_melamine_laminated_chipboard_materials.jpg",
    "https://tiimg.tistatic.com/fp/1/006/140/modular-office-computer-table-406.jpg",
    "https://5.imimg.com/data5/CK/XV/QK/SELLER-45253459/computer-table-with-drawer-500x500.jpg",
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
    "https://5.imimg.com/data5/FB/ET/MY-16333240/conference-table-500x500.jpg",
    "https://adimaa.in/wp-content/uploads/2019/06/101-1.jpg",
    "https://www.custom-conference-tables.com/wp-content/uploads/2020/04/army-corps-engineers-modular-conference-room-table-620x443.jpg",
    "https://secure.img1-fg.wfcdn.com/im/53599445/compr-r85/3842/38427016/default.jpg",
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
