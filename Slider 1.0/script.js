function Slider(selector){
 var elements = document.querySelector(selector).getElementsByTagName("img"),
 		 self = this;
 this.init = function(){
    document.querySelector(".prev").addEventListener("click",function(){self.moviePic("prev")},false);
    document.querySelector(".next").addEventListener("click",function(){self.moviePic("next")},false);  
  	}
                  
	this.moviePic = function(movie){
  	elements = [].slice.call(elements);   
    elements[0].classList.remove("view");

    if(movie == "prev"){
      elements.push(elements.shift());
    }
    
    if(movie == "next"){
      elements.unshift(elements.pop());        
    }
    elements[0].classList.add("view"); 	 
	}
}

var slider1 = new Slider(".slider");
slider1.init();