const study_office = () => {
  return [
    "https://i.pinimg.com/736x/cb/be/8a/cbbe8a8dc92307d6bfc3a982473119da.jpg",
    "https://www.magnonindia.com/wp-content/uploads/2019/02/sr-1-960x675.jpg",
    "https://3.imimg.com/data3/WB/YR/MY-2826375/interior-design-for-kid-study-room-500x500.jpg",
    "https://5.imimg.com/data5/KL/LN/XB/SELLER-20754662/modular-furniture-manufacturers-and-dealer-in-delhi-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK0UzkR5jUng3MNNK7qzr_BtqS16qcS8GmDw&usqp=CAU",
    "https://miliindchorrge.com/wp-content/uploads/2019/07/Karad-Satara-branch10.jpg",
    "https://lh3.googleusercontent.com/proxy/ihh1klZBIacJjLu9mjuCVRw9ypdpCPjyHYNshTlPHdM16TGgbhlpBScf5RMS4-a2G0XqQit37MvLtSt9zP-qAuPnDm9z80gMIGBrC74y2A-vF-1UJaDG5jaQxHXtXoR2vsTpNNSlUCFF-3d3WRzsGrvbmNG0oQ"
  ].map((val, index) => {
    return {
      key: "study_office",
      label: `Study-Office-#01${index}`,
      imageurl: val,
    };
  });
};
