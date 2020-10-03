const dressing_room = () => {
    return [
      "https://media.designcafe.com/wp-content/uploads/2019/11/17054845/dressing-room-design.jpg",
      "https://ksassets.timeincuk.net/wp/uploads/sites/59/2018/01/rt_Massey_LivEtc_Read_0325-768x986-717x920.jpg",
      "https://cdn.home-designing.com/wp-content/uploads/2014/05/14-Ensuite-dressing-room.jpg",
      "https://cdn.boydforcongress.com/wp-content/uploads/closet-small-dressing-room-ideas-house-exterior_445988.jpg",
      "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2011/11/29/1/CI-Closet-Maid_shelf-track-nickel-his-and-hers_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1409188623757.jpeg",
      
    ].map((val, index) => {
      return {
        key: "dressing_room",
        label: `Dressing-Room-#01${index}`,
        imageurl: val,
      };
    });
  };
  