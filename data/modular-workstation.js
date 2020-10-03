// RANDOMIZE AN ARRAY
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const cluster_workstation = () => {
  return [
    "https://magnaa.com/wp-content/uploads/2018/08/modular-cluster-workstation-in-chennai.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39e031d0-e3cb-4c3b-9432-09ef45ee37dc/d19f2qf-11c844e6-2ffb-4bc1-bcf1-b6c6a60d2bee.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzllMDMxZDAtZTNjYi00YzNiLTk0MzItMDllZjQ1ZWUzN2RjXC9kMTlmMnFmLTExYzg0NGU2LTJmZmItNGJjMS1iY2YxLWI2YzZhNjBkMmJlZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.etQX7k6x6gNIjPwC5a6U6CVhrp8HjT5z0z3tWSnGbrw",
    "https://18cfdfd73150f69310ab-4d842a0601d0ae955a714605e7fb6d6f.ssl.cf2.rackcdn.com/5711/3934059.jpg",
    "https://i.pinimg.com/originals/2e/6d/75/2e6d756cb412f841d92ca039403b1bb7.jpg",
  ].map((val, index) => {
    return {
      key: "cluster",
      label: `Cluster-workstation-#01${index}`,
      imageurl: val,
    };
  });
};
const linear_workstation = () => {
  return [
    "https://static.wixstatic.com/media/0993f5_c0f974f29caf486489404ec2bbfb9a08~mv2.jpg/v1/fill/w_750,h_560,fp_0.50_0.50,q_80/0993f5_c0f974f29caf486489404ec2bbfb9a08~mv2.jpg",
    "https://content.jdmagicbox.com/quickquotes/images_main/layout-type-linear-modular-workstation-table-319720539-x6twc.jpg",
    "https://www.ezeefit.in/images/Linear-Storala/big/Linear-Storola-1.jpg",
    "https://5.imimg.com/data5/KL/PF/AP/SELLER-4469018/green-desk-type-modular-workstation-500x500.jpg",
  ].map((val, index) => {
    return {
      key: "linear",
      label: `Linear-workstation-#001${index}`,
      imageurl: val,
    };
  });
};

const all_modular_workstation = {
  filters: [
    { key: "*", label: "All", class:"selected"},  
    { key: ".linear", label: "Linear" },
    { key: ".cluster", label: "Cluster" },
  ],
  dataImages: shuffle([...cluster_workstation(), ...linear_workstation()]),
};
