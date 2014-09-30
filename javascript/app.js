(function(){
	$("form").parsley();
	$("form").on({
		submit:function(e){
			e.preventDefault();
			$(".spinner").remove();
			$("body").append('<i class="fa fa-cog fa-spin  fa-5x spinner"></i>');

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
			var total=(data.BTC.USD*converter);

			$(".spinner").remove();

			$("#conversion")
				.html(total)
				.formatCurrency(total)
				.prepend("Your Bitcoins are worth ");


			console.log(total);
	}
})();