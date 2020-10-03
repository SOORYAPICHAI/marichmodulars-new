const wardrobe = () => {
    return [
      "https://img3.exportersindia.com/product_images/bc-full/2020/4/6908938/modular-wardrobe-1587716663-5390044.jpeg",
      "https://lifeisanepisode.com/wp-content/uploads/dark-grey-wardrobe-design.jpg",
      "https://website-images.livmatrix.com/magazine/wp-content/uploads/2017/03/27163731/Modular-wardrobe-designs_1.jpg",
      "https://www.sacandinterior.com/wp-content/uploads/2019/08/SAC-Interior_Modular-Wardrobe-Interior_thumb5.jpg",
      "https://www.sacandinterior.com/wp-content/uploads/2019/08/SAC-Interior_Modular-Wardrobe-Interior_thumb5.jpg",
      "https://5.imimg.com/data5/MQ/EG/SZ/SELLER-95583670/modular-wardrobe-500x500.jpg",
      "https://www.coronetkitchens.com/wp-content/uploads/2019/07/6.jpg",
      "https://d1q6kvh8ntrf2h.cloudfront.net/s3fs-public/vendor/009_1_1.jpg"
    ].map((val, index) => {
      return {
        key: "wardrobe",
        label: `wardrobe-#01${index}`,
        imageurl: val,
      };
    });
  };
  