function shadowM2(options) {
  let images = document.querySelectorAll(".shadowM2");

  if (options.shadow_type === "hard") {
    options.shadow_type = "0px";
  } else options.shadowtype = "15px";

  images.foreach(image=>{
    image.style.boxshadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0,0.12)` 

    if (options.padding) {
        image.style.padding = '1em'
        
    }
  })


}


module.exports.shadowM2 = shadowM2