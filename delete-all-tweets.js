
// ==UserScript==
// @name         Delete All tweets
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script will delete all tweets from twitter
// @author       Brijesh Gamit
// @match        https://twitter.com/username/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==•


$(document).ready(function(){
setTimeout(task,10000);

function task(){

	$('html, body').animate({
        scrollTop: $("article:first").offset().top-500
    }, 1000);
		
		if($("article:first span:contains('You Retweeted')").length>0){
			
			$("article:first").find("[data-testid='unretweet']").click();
			setTimeout(function(){
				$("span:contains('Undo Retweet')").closest("div[role='menuitem']").click();
				setTimeout(function(){
						task();
					},5000);
			},2000);
				
		}else{
			 
			$("[data-testid='caret']")[0].click();
			setTimeout(function(){
				$("span:contains('Delete')").closest("div[role='menuitem']").click();
					setTimeout(function(){
					$("span:contains('Delete')").closest("div[role='button']").click();
					setTimeout(function(){
						task();
					},5000);
				},2000);
			},2000);
		

		}
	

}


	


});
