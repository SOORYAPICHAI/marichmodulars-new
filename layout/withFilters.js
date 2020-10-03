const mainSection = (data) =>{
    // FILTERS
let filters = data["filters"].map((val) => {
    return `<li> <a href="#" data-filter=${val.key} class=${val.class ? val.class : ''}>${val.label}</a></li >`;
  });
  $("#filters").append(filters);
  
  // DATA
  
  // <!-- gallery item -->
  let dataOfImages = () => data["dataImages"].map((val) => {
    debugger;
    return `
              <div class="col-md-3 item  ${val.key}">
                              <div class="picframe">
                                  <a class="image-popup-gallery" href=${val.imageurl}>
                                      <span class="overlay">
                                          <span class="pf_text">
                                              <span class="project-name">${val.label}</span>
                                          </span>
                                      </span>
                                  </a>
                                  <img src=${val.imageurl} alt="" />
                              </div>
                          </div>`;
  });
  $("#gallery").append(dataOfImages);
  // <!-- close gallery item -->
  
}