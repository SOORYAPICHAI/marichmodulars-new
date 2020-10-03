const reception_desk = () => {
  return [
    "https://i.pinimg.com/originals/2c/8b/71/2c8b710197f53a778117e06f42dbcd16.jpg",
    "https://rapidoffice.furniture/wp-content/uploads/2016/07/p-2713-zc39_16__05858.1446542954.1280.1280.jpg",
    "https://i.pinimg.com/originals/1a/a3/7d/1aa37de31bbaece191dd6b31145e4782.jpg",
    "https://immagini.designbest.com/immaginiprodotti/reception_desk/big/4068-receptiondesk-81718-b-1.jpg",
    "https://i.pinimg.com/564x/57/03/2a/57032a5605a335084a6ab0d05847c762.jpg",
    "https://www.mavikom.ru/upload/resize_cache/iblock/0e5/900_525_2/25_07_2017_int_1_0000.jpg",
    "https://i.pinimg.com/originals/cb/a1/18/cba1181290b2be3fab20548c56d9fad3.jpg",
    "https://www.usm.com/media/11107/reception.jpg?anchor=center&mode=crop&width=600&height=300&rnd=132265161990000000&quality=80",
  ].map((val, index) => {
    return {
      key: "reception-desk",
      label: `Reception-desk-#01${index}`,
      imageurl: val,
    };
  });
};
