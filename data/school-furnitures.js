const school_furniture = () => {
    return [
      "https://www.sharonfurniture.in/wp-content/uploads/2018/04/school-image.jpeg",
      "https://www.interiorconcepts.com/wp-content/uploads/2013/09/STEM-Lab-Furniture-Interior-Concepts-WestMain-1.jpg",
      "https://www.sharonfurniture.in/wp-content/uploads/2017/04/jkljb.jpg",
      "https://lh3.googleusercontent.com/proxy/p8ajfyUoEoh3sOkIsgKGICEHH0wyJvWUlowfk6yjzC_WPr-zsiPKiDYBbUSC6cU_n9GdJ3PiDXPq7aROFHRZABh4nI0q5Ah-dgYVD41VvsT2f60uYuf-iw",
      "https://3.imimg.com/data3/OI/FD/MY-11495034/school-furniture-500x500.jpg",
      "https://cpimg.tistatic.com/05938354/b/4/Best-School-Furniture.jpg",
      "https://cpimg.tistatic.com/05938354/b/4/Best-School-Furniture.jpg",
      "https://5.imimg.com/data5/OK/CR/WX/SELLER-45965083/school-furniture-500x500.jpg",
      "https://bizimages.withfloats.com/actual/5a2b9ae0b7bcd80bc8385287.jpg",
      "https://i1.wp.com/shaperslab.com/wp-content/uploads/2019/01/St-Ignatius-College-science-laboratory-furniture.jpg?w=1080&ssl=1",
      "https://image.ec21.com/image/gzrjslab/oimg_GC09779760_CA09779855/Chemistry-Laboratory-Student-Table-Bench-School-Laboratory-Furniture.jpg",
      "https://indianschool.bh/images/facilities/computer-lab/26.jpg",
      "https://krugermetaform.com/wp-content/uploads/2017/06/comp1.jpg",
      "https://i.guim.co.uk/img/media/acf93973b39e85755ee67d19954a365a5e714517/0_491_4146_2488/master/4146.jpg?width=1200&quality=85&auto=format&fit=max&s=e2f6e9644758c5b2c4245f5179b59a89"
    ].map((val, index) => {
      return {
        key: "school-furniture",
        label: `School-furniture-#01${index}`,
        imageurl: val,
      };
    });
  };
  