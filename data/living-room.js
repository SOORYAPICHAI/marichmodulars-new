const living_room = () => {
    return [
      "https://i.pinimg.com/originals/ce/fe/6a/cefe6aad2d1905bdc7c8fd2d01437937.jpg",
      "https://zedinteriors.com/assets/user/images/project/living_room_interiors_zed_delhi_(4).jpeg",
      "https://lh3.googleusercontent.com/proxy/WsXA2QXIVuEmSLvyQTTnlpMPgAKyauBi1yb1XGOp8iBkpoFpxVw_Pnd3xTrIFeehBL8NlCf3Aib81XNOQRW0WDDRgOVVMFbavLiblhxi1ow6CFev5ZptcxrUHifGW_Lld7ctfmTN0JPbTpZ6AyIfW8FanSv2DxqygorWllvb",
      "https://hips.hearstapps.com/edc.h-cdn.co/assets/16/42/1476905394-london-townhouse-tour-1.jpg",
      "https://hips.hearstapps.com/edc.h-cdn.co/assets/16/42/1476905394-london-townhouse-tour-1.jpg",
      "https://res.cloudinary.com/indonesiadesign/image/upload/f_auto,fl_progressive,q_auto:best/ezgif-3-7e324b92a37c.jpg",
      "https://www.homeguide.com.sg/wp-content/uploads/2019/01/Warm-bachelor-pad-at-Poshgrove-East-condominium-interior-design-renovation.png",
      "https://5.imimg.com/data5/VI/GR/MY-2/living-room-interior-designing-500x500.jpg",
    ].map((val, index) => {
      return {
        key: "living_room",
        label: `Living-Room-#01${index}`,
        imageurl: val,
      };
    });
  };
  