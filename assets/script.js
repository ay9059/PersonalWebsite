var gear = document.getElementById("wheelImage");

//Optimized scrolling, to prevent janking
;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();
window.addEventListener("optimizedScroll", function() {
     gear.style.transform = "rotate(" + window.pageYOffset/6 + "deg)";
 
});

//This snippet makes things appear only if its in the viewport

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
myID = document.getElementById("education");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (isInViewport(myID)) {
    myID.className = "educationshow"
  } else {
      if(myID.className!="educationshow"){
         myID.className = "educationhide"
      }
    
  }
};

window.addEventListener("scroll", myScrollFunc);


