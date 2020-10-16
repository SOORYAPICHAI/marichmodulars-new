const construct_image_url = (url) =>{
  return `/data/${url}`
}
const school_furniture = () => {
    return [
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture01.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture02.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture03.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture04.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture05.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture06.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture07.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture08.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture09.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture10.png`),
      construct_image_url(`./marichmodulars-product-images/School-Furniture/School-Furniture11.png`),
    ].map((val, index) => {
      return {
        key: "school-furniture",
        label: `School-furniture-#01${index}`,
        imageurl: val,
      };
    });
  };
  