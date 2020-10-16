const construct_image_url = (url) =>{
  return `/data/${url}`
}
const wardrobe = () => {
    return [
      
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe01.png`),
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe02.png`),
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe03.png`),
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe04.png`),
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe05.png`),
      construct_image_url(`./marichmodulars-product-images/Wardrobe/Wardrobe06.png`),
    ].map((val, index) => {
      return {
        key: "wardrobe",
        label: `wardrobe-#01${index}`,
        imageurl: val,
      };
    });
  };
  