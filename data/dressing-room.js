const construct_image_url = (url) =>{
  return `/data/${url}`
}
const dressing_room = () => {
    return [
      construct_image_url('./marichmodulars-product-images/Dressing-Room/Dressing-Room01.png'),
      construct_image_url('./marichmodulars-product-images/Dressing-Room/Dressing-Room02.png'),
      construct_image_url('./marichmodulars-product-images/Dressing-Room/Dressing-Room03.png'),
      construct_image_url('./marichmodulars-product-images/Dressing-Room/Dressing-Room04.png'),
      construct_image_url('./marichmodulars-product-images/Dressing-Room/Dressing-Room05.png'),
      
    ].map((val, index) => {
      return {
        key: "dressing_room",
        label: `Dressing-Room-#01${index}`,
        imageurl: val,
      };
    });
  };
  