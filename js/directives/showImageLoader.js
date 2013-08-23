/*global define:false */
angular.module('Fundoo-Directives', []).directive('imageLoader', [function() {
  return {
    restrict: 'A',
    scope: {
      loadingIndicatorImage: '@',
      errorImage: '@',
      backgroundImage: '@'
    },
    link: function(scope, element, attrs) {
      console.log("Inside Image Directive : ", scope);
      element.css("background-image", "url(" + scope.loadingIndicatorImage + ")");
      element.bind("load", function() {
         console.log("element is : ", element);
         element.css("background-image", "");
      });

      element.bind("error", function() {
        console.log("On Error");
        element.attr("src", scope.errorImage);
      });
    }
  };
}]);


