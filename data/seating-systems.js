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
const executive_chairs = () => {
  return [
    "https://www.featherlitefurniture.com/drupal/sites/default/files/products/Click_Main.jpg",
    "https://5.imimg.com/data5/MB/FP/MY-25466673/director-office-chair-500x500.jpg",
    "https://www.featherlitefurniture.com/drupal/sites/default/files/products/Click_HB-&-MB.jpg",
    "https://www.shoppychairs.com/wp-content/uploads/2020/04/optima-high-back-executive-chairs.jpg",
  ].map((val, index) => {
    return {
      key: "executive-chairs",
      label: `Executive-Chairs-#02${index}`,
      imageurl: val,
    };
  });
};

const workstation_chairs = () => {
  return [
    "https://www.prestigeofficesystems.com/wp-content/uploads/2016/10/Office-Furniture-Delhi-Gurgaon-India.jpg",
    "https://www.cassamia.my/images/stories/virtuemart/product/Vinca%20Table.jpg",
    "https://4.imimg.com/data4/HL/YH/ANDROID-23359248/product-500x500.jpeg",
    "https://i.pinimg.com/originals/0f/41/02/0f4102953543108b8a3f3a7dcfbc4461.jpg",
  ].map((val, index) => {
    return {
      key: "workstation-chairs",
      label: `Workstation-Chairs-#03${index}`,
      imageurl: val,
    };
  });
};

const visitor_chairs = () => {
  return [
    "https://images.steelcase.com/image/upload/v1432242197/www.steelcase.com/Bindu_Features.jpg",
    "https://cpimg.tistatic.com/05821822/b/4/Visitors-Modular-Office-Chair.jpg",
    "https://5.imimg.com/data5/KM/RN/MY-2548914/stylish-modular-chair-500x500.jpg",
    "https://www.ryanofficesystems.in/assets/images/home/Visitor-Chair.jpg",
  ].map((val, index) => {
    return {
      key: "visitor-chairs",
      label: `Visitor-Chairs-#04${index}`,
      imageurl: val,
    };
  });
};

const conference_chairs = () => {
  return [
    "https://5.imimg.com/data5/FB/JL/EX/SELLER-83084701/godrej-corporate-15-500x500.jpg",
    "https://sc02.alicdn.com/kf/HTB10UF7bQOWBuNjSsppq6xPgpXa5/201769699/HTB10UF7bQOWBuNjSsppq6xPgpXa5.jpg_.webp",
    "https://www.esquirespacenstyle.com/products/gallery/00000032.jpg",
    "https://images.custommade.com/7cGfxyUrtnHsMX6Es7HAg7MSVlI=/custommade-photosets/8e2993b3a96039a_img_3915.JPG",
  ].map((val, index) => {
    return {
      key: "conference-chairs",
      label: `Conference-Chairs-#05${index}`,
      imageurl: val,
    };
  });
};

const trainee_chairs = () => {
  return [
    "https://5.imimg.com/data5/HX/IC/MY-43133357/trainee-and-institution-chairs-and-table-500x500.jpg",
    "https://www.primeofficesystems.in/images/products/trainee-chairs/large/004.jpg",
    "https://1.bp.blogspot.com/-YwhuiBL_4_U/Uvu8uiIJ7pI/AAAAAAAAHxE/HzrjZ-ACZ7w/s1600/Mayline+Sync+Training+Tables.png",
    "https://5.imimg.com/data5/ID/QI/IP/SELLER-4711259/computer-lab-furniture-500x500.jpg",
  ].map((val, index) => {
    return {
      key: "trainee-chairs",
      label: `Trainee-Chairs-#06${index}`,
      imageurl: val,
    };
  });
};

const auditorium_chairs = () => {
  return [
    "https://geeken.in/wp-content/uploads/2018/09/audi-5.jpg",
    "https://5.imimg.com/data5/KD/WP/TT/SELLER-109575/auditorium-chair-500x500.jpg",
    "https://geeken.in/wp-content/uploads/2018/09/audi-5.jpg",
    "https://5.imimg.com/data5/OU/SB/MY-19342895/modular-auditorium-chair-500x500.jpg",
  ].map((val, index) => {
    return {
      key: "auditorium-chairs",
      label: `Auditorium-Chairs-#07${index}`,
      imageurl: val,
    };
  });
};

const all_modular_seating_systems = {
  filters: [
    { key: "*", label: "All", class:"selected"},  
    { key: ".executive-chairs", label: "Executive Chairs" },
    { key: ".workstation-chairs", label: "Workstation Chairs" },
    { key: ".visitor-chairs", label: "Visitor Chairs" },
    { key: ".conference-chairs", label: "Conference Chairs" },
    { key: ".trainee-chairs", label: "Trainee Chairs" },
    { key: ".auditorium-chairs", label: "Auditorium Chairs" },
  ],
  dataImages: shuffle([
    ...executive_chairs(),
    ...workstation_chairs(),
    ...visitor_chairs(),
    ...conference_chairs(),
    ...trainee_chairs(),
    ...auditorium_chairs(),
  ]),
};
