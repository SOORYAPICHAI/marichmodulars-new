const construct_image_url = (url) =>{
  return `/data/${url}`
}
const visitor_lounge = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge01.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge02.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge03.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge04.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge05.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge06.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge07.png`),
      construct_image_url(`./marichmodulars-product-images/Visitor-Lounge/Visitor-Lounge08.png`),
    ].map((val, index) => {
      return {
        key: "visitor-lounge",
        label: `Visitor-lounge-#01${index}`,
        imageurl: val,
      };
    });
  };
  