const construct_image_url = (url) =>{
  return `/data/${url}`
}
const living_room = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/living-Room/living-Room01.png`),
      construct_image_url(`./marichmodulars-product-images/living-Room/living-Room02.png`),
      construct_image_url(`./marichmodulars-product-images/living-Room/living-Room03.png`),
      construct_image_url(`./marichmodulars-product-images/living-Room/living-Room04.png`),
      construct_image_url(`./marichmodulars-product-images/living-Room/living-Room05.png`),
    ].map((val, index) => {
      return {
        key: "living_room",
        label: `Living-Room-#01${index}`,
        imageurl: val,
      };
    });
  };
  