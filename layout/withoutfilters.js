const mainSection = (data) =>{
    // DATA
debugger
// <!-- gallery item -->
let dataOfImages = data.map((val) => {
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