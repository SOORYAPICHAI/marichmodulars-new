const construct_image_url = (url) =>{
  return `/data/${url}`
}
const study_office = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Study-Office/Study-Office01.png`),
    construct_image_url(`./marichmodulars-product-images/Study-Office/Study-Office02.png`),
    construct_image_url(`./marichmodulars-product-images/Study-Office/Study-Office03.png`),
    construct_image_url(`./marichmodulars-product-images/Study-Office/Study-Office04.png`),
    construct_image_url(`./marichmodulars-product-images/Study-Office/Study-Office05.png`),
  ].map((val, index) => {
    return {
      key: "study_office",
      label: `Study-Office-#01${index}`,
      imageurl: val,
    };
  });
};
