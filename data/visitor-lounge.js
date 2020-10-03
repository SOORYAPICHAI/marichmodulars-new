const visitor_lounge = () => {
    return [
      "https://image.architonic.com/img_pro2-4/154/4326/zones-modularseating-sololounge-b.jpg",
      "https://i1.wp.com/www.womanofstyleandsubstance.com/wp-content/uploads/2017/08/lounge-suite.jpg?resize=900%2C621&ssl=1",
      "https://ksassets.timeincuk.net/wp/uploads/sites/59/2019/01/wpggardner-9968.jpg",
      "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/naughtone/symbol_modular_seating/og_prd_symbol_modular_seating.jpg",
      "https://skift.com/wp-content/uploads/2020/01/SwissZurichAirportLounge.jpg",
      "https://steelcase-res.cloudinary.com/image/upload/c_fill,dpr_auto,q_70,h_656,w_1166/v1497362711/www.steelcase.com/2017/06/13/17-0083069.jpg",
      "https://steelcase-res.cloudinary.com/image/upload/c_fill,dpr_auto,q_70,h_656,w_1166/v1541172498/www.steelcase.com/2018/11/02/18-0111313.jpg",
      "https://i2.wp.com/www.womanofstyleandsubstance.com/wp-content/uploads/2017/08/611220001_001_08212017_1.jpg?resize=900%2C621&ssl=1",
    ].map((val, index) => {
      return {
        key: "visitor-lounge",
        label: `Visitor-lounge-#01${index}`,
        imageurl: val,
      };
    });
  };
  