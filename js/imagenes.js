(function (document) {
    var checkCount = 0,
      formatFound = false;
  
    function setHTMLClass(height, className) {
      checkCount++;
      if (height == 2) {
        formatFound = true;
        document.documentElement.className += " " + className;
      } else {
        document.documentElement.className += " not" + className;
        if (checkCount == 4 && !formatFound) {
          if (
            document.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#Image",
              "1.1"
            )
          ) {
            document.documentElement.className += " svg";
          } else {
            document.documentElement.className += " notsvg png";
          }
        }
      }
    }