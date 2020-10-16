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
const executive_chairs = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Executive-Chairs/Executive-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Executive-Chairs/Executive-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Executive-Chairs/Executive-Chairs03.png`),
    construct_image_url(`./marichmodulars-product-images/Executive-Chairs/Executive-Chairs04.png`),
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
    construct_image_url(`./marichmodulars-product-images/Workstation-Chairs/Workstation-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Workstation-Chairs/Workstation-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Workstation-Chairs/Workstation-Chairs03.png`),
    construct_image_url(`./marichmodulars-product-images/Workstation-Chairs/Workstation-Chairs04.png`),
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
    construct_image_url(`./marichmodulars-product-images/Visitor-Chairs/Visitor-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Visitor-Chairs/Visitor-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Visitor-Chairs/Visitor-Chairs03.png`),
    construct_image_url(`./marichmodulars-product-images/Visitor-Chairs/Visitor-Chairs04.png`),
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
    construct_image_url(`./marichmodulars-product-images/Conference-Chairs/Conference-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Chairs/Conference-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Chairs/Conference-Chairs03.png`),
    construct_image_url(`./marichmodulars-product-images/Conference-Chairs/Conference-Chairs04.png`),
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
    construct_image_url(`./marichmodulars-product-images/Trainee-Chairs/Trainee-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Trainee-Chairs/Trainee-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Trainee-Chairs/Trainee-Chairs03.png`),
    construct_image_url(`./marichmodulars-product-images/Trainee-Chairs/Trainee-Chairs04.png`),
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
    construct_image_url(`./marichmodulars-product-images/Auditorium-Chairs/Auditorium-Chairs01.png`),
    construct_image_url(`./marichmodulars-product-images/Auditorium-Chairs/Auditorium-Chairs02.png`),
    construct_image_url(`./marichmodulars-product-images/Auditorium-Chairs/Auditorium-Chairs03.png`),
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
