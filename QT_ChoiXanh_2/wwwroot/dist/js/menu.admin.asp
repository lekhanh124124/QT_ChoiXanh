
$(document).ready(function() {
    var getMenuItem = function (itemData) {
        var item = $('<li class="' + itemData.lcss + '">')
            .append(
                $('<a>', {
                    class: itemData.acss,
                    href: itemData.link,
                    html: '<i class="fa ' + itemData.icss + '"></i><span> ' + itemData.name
                })
            );

        if (Array.isArray(itemData.sub)) {
            var subList = $('<ul class="treeview-menu">');
            $.each(itemData.sub, function () {
                // bỏ qua item rỗng {}
                if (this && this.link) {
                    subList.append(getMenuItem(this));
                }
            });
            item.append(subList);
        }

        return item;
    };

    var $menu = $('#root_treepa2');

    $.getJSON('/admin/api/menu.asp?id1=5&id2=5&id3=&id4=5', function (data) {
        $.each(data, function () {
            if (this && this.link) {
                $menu.append(getMenuItem(this));
            }
        });
    });
});
$(document).ready(function() {
	var start = new Date();
	$(window).unload(function() {
		var end = new Date();
		$.ajax({ 
			url: "/api/save/timeonpage.asp?id=5",
			data: {'id1': end - start},
			async: false
		})
   });
});

$(document).ready(function() {
    $(window).keyup(function(e){
		if((e.keyCode == 44) || (e.keyCode == 46)){
			$.ajax({
				type: 'POST',
				url: '/api/save/luuprintscreen.asp', 
				async: true,
				beforeSend: function() {
				},
				success: function(responseText) {
					$(".formthongbaopopupcenter").html(responseText);
				}
			});
//			console.log("Print screen or Delete");
		}
    }); 
}); 

$(document).ready(function() {
    var ctrlDown = false,
        ctrlKey = 17,
        cmdKey = 91,
        vKey = 86,
        xKey = 88;
        cKey = 67;
    $(document).keydown(function(e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
    }).keyup(function(e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
    });

    $(".no-copy-paste").keydown(function(e) {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
    });

    $(document).keydown(function(e) {
        if (ctrlDown && (e.keyCode == cKey)){
			$.ajax({
				type: 'POST',
				url: '/api/save/luuprintscreen.asp', 
				async: true,
				beforeSend: function() {
				},
				success: function(responseText) {
					$(".formthongbaopopupcenter").html(responseText);
				}
			});
//			console.log("Ctrl+C");
		};
        if (ctrlDown && (e.keyCode == vKey)){
			$.ajax({
				type: 'POST',
				url: '/api/save/luuprintscreen.asp', 
				async: true,
				beforeSend: function() {
				},
				success: function(responseText) {
					$(".formthongbaopopupcenter").html(responseText);
				}
			});
//			console.log("Ctrl+V");
		};
    });
});