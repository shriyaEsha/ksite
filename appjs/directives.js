var myApp = angular.module('myAppDirectives',[]);
myApp.directive('compile', ['$compile', function ($compile) {

				return function(scope, element, attrs) {

				var ensureCompileRunsOnce = scope.$watch(

						function(scope) {

						return scope.$eval(attrs.compile);

						},

						function(value) {

						console.log(value);

						element.html(value);

						$compile(element.contents())(scope);





						}

				);

				};

}]);
myApp.directive('helloWorld', function(){
	return {
		scope:{},
		restrict: 'AEC',
		replace: 'true',
		template:'<h3>hello</h3>'

	};
});
 myApp.directive('hoverUp', function() {
        console.log("hoverUp");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){
        		// elem.bind('click',function(){

        			$(".projectsContainer").animate({'opacity':"1",'marginTop':"-100px"},40);
        			// $(".club").animate({'opacity':"1",'marginTop':"0px"},100);
        			
        			$(".club").animate({'opacity':"1",'marginTop':"0"},140);
                    
                // $("#newsContainer").delay(120).animate({'marginTop':"0px",'opacity':"1"},0);

        	}
        };
    });

 myApp.directive('koreAnim', function() {
//        console.log("hoverUp");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){
                    $('.koreCircle').each(function(index){
                         $(this).animate({'opacity':"0"},0);
                    });
                    $('.koreCircle').each(function(index){
                        $(this).animate({'opacity':"1"},50*index);
                    });
                    $("#contactDetails").animate({'opacity':"1",'marginTop':"0"},40);
            }
        };
     });

 myApp.directive('social', function() {
//        console.log("hoverUp");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){

$(elem).init(scope.$eval(attrs.social));
            }
        };
    });

 myApp.directive('blackHeader', function() {
//        console.log("hoverUp");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){
                $(".chevron").css({'background':"url(images/patterns/congruent_outline.png",'background-position':"-20px 200px"});
                $(".overlay1").css({'height':"160px",'margin-top':'-50px'});
                $(".overlay1 h2").css({'padding-top':"80px"});  

            }
        };
    });


 myApp.directive('whiteHeader', function() {
//        console.log("hoverUp");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){
                $(".chevron").css({'background':"url(images/patterns/sativa.png)"});
                console.log("in white");
            }
        };
    });
