$(function(){
	$(".js-more").on("click", function() {
		var id = $(this).data("id")
	$.get("/products/" + id + "/description", function(description) {
		$.get("/products/" + id + "/inventory", function(inventory) {
			var inventoryText = "<strong>Available</strong>"
			if (inventory === "false"){
				inventoryText = "<strong>Sold Out</strong>"
			} 
			var descriptionText = "<p>" + description + "</p><p>" + inventoryText + "</p>"
			$("#product-" + id).html(descriptionText)
			})
		})
	})
})