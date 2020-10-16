const construct_image_url = (url) =>{
  return `/data/${url}`
}
const kitchen = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/Kitchen/Kitchen01.png`),
      construct_image_url(`./marichmodulars-product-images/Kitchen/Kitchen02.png`),
      construct_image_url(`./marichmodulars-product-images/Kitchen/Kitchen03.png`),
      
    ].map((val, index) => {
      return {
        key: "kitchen",
        label: `Kitchen-#01${index}`,
        imageurl: val,
      };
    });
  };
  