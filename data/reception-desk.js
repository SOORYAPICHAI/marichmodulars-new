const construct_image_url = (url) =>{
  return `/data/${url}`
}
const reception_desk = () => {
  return [
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk01.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk02.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk03.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk04.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk05.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk06.png`),
    construct_image_url(`./marichmodulars-product-images/Reception-Desk/Reception-Desk07.png`),
  ].map((val, index) => {
    return {
      key: "reception-desk",
      label: `Reception-desk-#01${index}`,
      imageurl: val,
    };
  });
};
