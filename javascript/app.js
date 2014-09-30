(function(){
	$("form").on({
		submit:function(e){
			e.preventDefault();

			//placing variable in global scope so jsonp is used
			converter = $("#CurrencyConverter").val();
			$.ajax({
			    type: 'GET',
			    url: "http://coinabul.com/api.php",
			    async: false,
			    jsonpCallback: 'jsonCallback',
			    contentType: "application/json",
			    dataType: 'jsonp',
			    success: function(json) {
			       //console.dir(json.sites);
			    },
			    error: function(e) {
			       console.log(e.message);
			    }
			});


		}
	})

	window.jsonCallback = function(data) {
			var total=(data.BTC.USD*converter).toFixed(2);


			console.log(total);
	}
})();