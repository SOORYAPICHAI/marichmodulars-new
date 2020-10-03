const kitchen = () => {
    return [
      "https://cpimg.tistatic.com/05679905/b/5/Modular-Kitchen-Interior-Design.jpg",
      "https://www.shilpakalainteriors.in/images/gallery/Kitchen/K(1).jpg",
      "https://media.designcafe.com/wp-content/uploads/2019/11/21171558/l-shaped-modular-kitchen-design.jpg",
      "https://5.imimg.com/data5/OV/WQ/MY-359783/l-shaped-modular-kitchen-500x500.jpg",
      "https://5.imimg.com/data5/IM/RN/MY-30394782/modular-kitchens-500x500.jpg",
      "https://i.ytimg.com/vi/DZfxe-YOlRU/maxresdefault.jpg",
      "https://4.imimg.com/data4/TY/JP/MY-9293913/modular-kitchen-interior-designing-500x500.jpg",
      "https://interiorjumbo.com/blog/wp-content/uploads/2019/02/DSC00942-750x498.jpg",
      "https://decormodular.in/images/product/kitchen/2.jpg"
      
    ].map((val, index) => {
      return {
        key: "kitchen",
        label: `Kitchen-#01${index}`,
        imageurl: val,
      };
    });
  };
  