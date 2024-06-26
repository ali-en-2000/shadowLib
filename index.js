function shadowM2(options) {
  let images = document.querySelectorAll(".shadowM2");


  if (options.shadow_type === "hard") {
    options.shadow_type = "0px";
  } else {

    options.shadow_type = "15px";
  } 


  images.forEach(image=>{
    image.style.boxShadow  = `10px 10px ${options.shadow_type} black` 

    if (options.padding) {
        image.style.margin = '1em'
        image.style.padding = '1em'
        
    }
  })


}

// use when you want to test
// module.exports = shadowM2

// use when you want to use
module.exports.shadowM2 = shadowM2
