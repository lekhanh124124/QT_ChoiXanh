$(document).ready(function () {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        $("html").addClass('opera');
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        $("html").addClass('chrome');
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        $("html").addClass('safari');
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        $("html").addClass('firefox');
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        $("html").addClass('ie');
    } else {
        $("html").addClass('browser');
    }
});

$(document).ready(function () {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    if (maskHeight > 600 & maskWidth > 1360) {
        //	$('.content-wrapper .content').css({'min-height':(maskHeight-300)+'px'});
    }
    if (maskWidth > 1360) {
        $('html').addClass('deskwide1200 fulldeskwide');
    }
    else if (maskWidth > 1200) {
        $('html').addClass('deskwide1200');
    }
    else {

    }
    if (maskHeight > 600) {
        $('html').addClass('fulldeskheight');
    }
    else {

    }
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
    });
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow", 0.8);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', 0);
    $(id).css('left', 0);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask').hide();
        $('.window').hide();
    });
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
});

$(function () {
    $('#filterpa2').treeListFilter('#root_treepa2', 200);
    $("#filterpa2").keypress(function () {
        if ($(this).val().length > 3) {
            var obj = $(".treeview").length;
            $('.treeview').each(function () {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                }
            });
        }
    });
});

$(document).ready(function () {
    $(function () {
        $('.close').click(function () {
            $(this).closest(".thongbaopopupcenter").fadeOut(300);
        });
    });
});

$(document).ready(function () {
    if (window.location.hash) {
        //bind to scroll function
        $(document).scroll(function () {
            var hash = window.location.hash
            var hashName = hash.substring(1, hash.length);
            var element;

            //if element has this id then scroll to it
            if ($(hash).length != 0) {
                element = $(hash);
            }
            //catch cases of links that use anchor name
            else if ($('a[name="' + hashName + '"]').length != 0) {
                //just use the first one in case there are multiples
                element = $('a[name="' + hashName + '"]:first');
            }

            //if we have a target then go to it
            if (element != undefined) {
                window.scrollTo(0, element.position().top);
            }
            //unbind the scroll event
            $(document).unbind("scroll");
        });
    }

});
$(document).ready(function () {
    $('form').submit(function () {
        $('.btnonetime').prop('disabled', true);
    });
});

$(document).ready(function () {
    $('.reloadpage').click(function () {
        location.reload();
    });
});

$(document).ready(function () {
    $('.input_data_gio').datetimepicker({
        step: 15,
        datepicker: false,
        timepicker: true,
        format: 'H:i'
    });

    $('.input_nhap_gio').datetimepicker({
        datepicker: false,
        timepicker: false,
        format: 'H:i'
    });

    $(function () {
        $('.dt1').datetimepicker({
            format: 'Y/m/d H:i',
            onShow: function (ct) {
                this.setOptions({
                    maxDate: $('.dt2').val() ? $('.dt2').val() : false
                })
            },
            timepicker: true
        });
        $('.dt2').datetimepicker({
            format: 'Y/m/d H:i',
            onShow: function (ct) {
                this.setOptions({
                    minDate: $('.dt1').val() ? $('.dt1').val() : false
                })
            },
            timepicker: true
        });
    });

    $(function () {
        $('.day1').datetimepicker({
            format: 'Y-m-d',
            onShow: function (ct) {
                this.setOptions({
                    maxDate: $('.day2').val() ? $('.day2').val() : false
                })
            },
            timepicker: false
        });
        $('.day2').datetimepicker({
            format: 'Y-m-d',
            onShow: function (ct) {
                this.setOptions({
                    minDate: $('.day1').val() ? $('.day1').val() : false
                })
            },
            timepicker: false
        });
    });
});

$(document).ready(function () {
    $(document).on('mouseenter', '.hidebutton', function () {
        $(this).find(".none").show();
        $(this).addClass('active');
    }).on('mouseleave', '.hidebutton', function () {
        $(this).find(".none").hide();
        $(this).removeClass('active');
    });
});

$(document).ready(function () {
    prepareDynamicDates();
    $(".timeago").timeago();
});

$(document).ready(function () {
    $('.backLink').click(function () {
        parent.history.back();
        return false;
    });
});

$(document).ready(function () {
    $(".loaddataajax").each(function () {
        var link = $(this).attr("data-src");
        getboloc(link, $(this));
    });
});

function getboloc(link, obj) {
    $.ajax({
        type: 'POST',
        url: link,
        async: true,
        beforeSend: function () {
            $('body').addClass('loading');
            $('body').removeClass('loaded');
        },
        success: function (responseText) {
            $(obj).html(responseText);
            $('body').addClass('loaded');
            $('body').removeClass('loading');
            if ($("html").find(".fixbottom").length > 0) {
                $(".box-footer").addClass('fixboxfooter');
            }
        }
    });
    return false;
}

$(document).ready(function () {
    loaddataajaxtime();
});

function loaddataajaxtime() {
    $(".loadajaxbytime").each(function () {
        var obj = $(this);
        var appendto = obj;
        var src = obj.attr("data-src");
        var time = 30000;
        var noAttr = obj.attr('time'); // undefined
        //check tồn tại time
        if (typeof noAttr !== typeof undefined && noAttr !== false) {
            time = noAttr;
        }
        //check default appendto
        var newobj = $(obj).attr("append-to");
        if (typeof newobj !== typeof undefined && newobj !== false) {
            appendto = $(newobj);
        }
        setInterval(function () {
            $.ajax({
                type: 'POST',
                url: src,
                async: true,
                beforeSend: function () { },
                success: function (responseText) {
                    //appendto.html(responseText);
                    $(obj).html(responseText);
                }
            });
        }, time);
    })
    return false;
}
$(document).ready(function () {
    $(".countSupportCon").each(function () {
        var giatri = $(this).attr("val");
        var obj = $(this);
        $.ajax({
            type: 'POST',
            url: "/api/count/SupportCon.asp?id=" + giatri,
            async: true,
            crossDomain: true,
            success: function (responseText) {
                obj.html(responseText);
            }
        });
    });
});

$(document).ready(function () {
    $(".countlivecCNN").each(function () {
        var giatri = $(this).attr("val");
        var obj = $(this);
        $.ajax({
            type: 'POST',
            url: "/api/count/livecCNN.asp?id=" + giatri,
            async: true,
            crossDomain: true,
            success: function (responseText) {
                obj.html(responseText);
            }
        });
    });
});

$(document).ready(function () {
    $(".countemailCNN").each(function () {
        var giatri = $(this).attr("val");
        var obj = $(this);
        $.ajax({
            type: 'POST',
            url: "/api/count/emailCNN.asp?id=" + giatri,
            async: true,
            crossDomain: true,
            success: function (responseText) {
                obj.html(responseText);
            }
        });
    });
});

$(document).ready(function () {
    $('.chucnangpr').click(function () {
        var id = $(this).attr("id");
        $.ajax({
            type: 'POST',
            url: "/staff/general/huongdanparent.asp?id=" + id,
            async: true,
            success: function (responseText) {
                $(".formthongbaopopupcenter").html(responseText);
            }
        });
    })
});

$(document).ready(function () {
    $('.loadloght').click(function () {
        $.ajax({
            type: 'POST',
            url: "/staff/general/loggiaodich-q.asp",
            async: true,
            success: function (responseText) {
                $(".chitietloadloght").html(responseText);
            }
        });
    })
});

$(document).ready(function () {
    $('.loadlogcanhan').click(function () {
        $.ajax({
            type: 'POST',
            url: "/staff/general/logcanhan-q.asp",
            async: true,
            success: function (responseText) {
                $(".chitietlogcanhan").html(responseText);
            }
        });
    })
});

$(document).ready(function () {
    $('.loadcustomercanhan').click(function () {
        $.ajax({
            type: 'POST',
            url: "/staff/general/logcustomercanhan.asp",
            async: true,
            success: function (responseText) {
                $(".chitietcustomercanhan").html(responseText);
            }
        });
    })
});

$(document).ready(function () {
    $('.loadhdsudunght').click(function () {
        $.ajax({
            type: 'POST',
            url: "/staff/general/news-huongdan.asp",
            async: true,
            success: function (responseText) {
                $(".chitiethdsudunght").html(responseText);
            }
        });
    })
});

$(document).ready(function () {
    $('.loadcongviec').click(function () {
        dmcvdth();
    })
});

function dmcvdth() {
    $.ajax({
        type: 'POST',
        url: "/staff/general/dangthuchien.asp",
        async: true,
        success: function (responseText) {
            $(".chitietcongviec").html(responseText);
        }
    });
}

function ktttnv() {
    $.ajax({
        type: 'POST',
        url: "/admin/general/popup.asp",
        async: true,
        beforeSend: function () { },
        success: function (responseText) {
            if ($("body").hasClass("loaded")) {
                $('.ttnvlv').html(responseText);
            }
        }
    });
    return false;
}

setInterval(ktttnv, 90000);

$(document).ready(function () {
    ktttnv();
});

$(document).ready(function () {
    get_thongbaomoi();
});
setInterval(get_thongbaomoi, 30000);

function get_thongbaomoi() {
    var w = screen.width;
    var aw = screen.availWidth;
    if (w > 992) {
        $('.formthongbaomoipopup').addClass('formthongbaomoipopup1');
        $.ajax({
            type: 'POST',
            url: "/admin/general/thongbaomoi.asp",
            data: "",
            async: true,
            beforeSend: function () {
                $('.onload').show();
            },
            success: function (responseText) {
                $('.formthongbaomoipopup').html(responseText);
                $('.formthongbaomoipopup1').removeClass('formthongbaomoipopup');
            }
        });
        return false;

    }
}

$(document).ready(function () {
    $('.xoathongbao').click(function () {
        var matinxoa = $(this).attr('data-id');
        // //console.log('Ma tin xoa:', matinxoa);
        $('.thongbaoso' + matinxoa).addClass('none');
        $.ajax({
            type: 'POST',
            url: "/staff/general/anthongbao.asp",
            data: "id=" + matinxoa,
            async: true,
            success: function (responseText) { }
        });
    })
});

// $(document).ready(function() {
// $(".khuvuclaydulieuchat").each(function() {
// var id = $(this).attr("id");
// getchatbox(id, $(this));
// });
// });

// function getchatbox(id, obj) {
// $.ajax({
// headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "origin, content-type, accept", "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,HEAD" },
// type: 'POST',
// url: "http://chat.choixanh.net/chatadmin.asp?adminid=" + id,
// async: true,
// crossDomain: true,
// success: function(responseText) {
// $(obj).html(responseText);
// }
// });
// return false;
// }


jQuery.fn.treeListFilter = function (list, timeout) {
    var list = jQuery(list);
    var input = this;
    var keyTimeout;
    var lastFilter = '';

    // Default timeout	
    if (timeout === undefined) {
        timeout = 200;
    }

    function filterList(ulObject, filterValue) {
        if (!ulObject.is('ul') && !ulObject.is('ol')) {
            return false;
        }
        var children = ulObject.children();
        var result = false;
        for (var i = 0; i < children.length; i++) {
            var liObject = jQuery(children[i]);
            if (liObject.is('li')) {
                var display = false;
                if (liObject.children().length > 0) {
                    for (var j = 0; j < liObject.children().length; j++) {
                        var subDisplay = filterList(jQuery(liObject.children()[j]), filterValue);
                        display = display || subDisplay;
                    }
                }
                if (!display) {
                    var text = liObject.text();
                    display = text.toLowerCase().indexOf(filterValue) >= 0;
                }
                liObject.css('display', display ? '' : 'none');
                result = result || display;
            }
        }
        return result;
    }

    input.change(function () {
        var filter = input.val().toLowerCase();
        //var startTime = new Date().getTime();
        filterList(list, filter);
        //var endTime = new Date().getTime();
        ////console.log('Search for ' + filter + ' took: ' + (endTime - startTime) + 'ms');
        return false;
    }).keydown(function () {
        clearTimeout(keyTimeout);
        keyTimeout = setTimeout(function () {
            if (input.val() === lastFilter) return;
            lastFilter = input.val();
            input.change();
        }, timeout);
    });
    return this;
}

$(document).ready(function () {
    $('.ndtour').click(function () {
        $(".control-sidebar").removeClass('control-sidebar-open');
    })
});

$(document).ready(function () {
    $('.showhelponlick').click(function () {
        $(".control-sidebar").removeClass('control-sidebar-open');
        $(".divshowhelp").css('position', 'relative');
        $(".divshowhelp .showhelp").removeClass('none').css('position', 'absolute');
    })
});

$(document).ready(function () {
    $('.alwayhelp').click(function () {
        $(".control-sidebar").removeClass('control-sidebar-open');
        $("body").addClass('sidebar-mini-expand-feature loaded').removeClass('sidebar-collapse');
        $(".divshowhelp .showhelp").addClass('none');
        $(".jquery-line").css('display', 'none');
    })
});

function BrowseServer(startupPath, functionData) {
    var finder = new CKFinder();
    finder.basePath = '/ckfinder/';
    finder.startupPath = startupPath;
    finder.selectActionFunction = SetFileField;
    finder.selectActionData = functionData;
    finder.selectThumbnailActionFunction = ShowThumbnails;
    finder.popup();
}

function SetFileField(fileUrl, data) {
    document.getElementById(data["selectActionData"]).value = fileUrl;
}

function ShowThumbnails(fileUrl, data) {
    var sFileName = this.getSelectedFile().name;
    document.getElementById('thumbnails').innerHTML +=
        '<div class="thumb">' +
        '<img src="' + fileUrl + '" />' +
        '<div class="caption">' +
        '<a href="' + data["fileUrl"] + '" target="_blank">' + sFileName + '</a> (' + data["fileSize"] + 'KB)' +
        '</div>' +
        '</div>';
    document.getElementById('preview').style.display = "";
    return false;
}

$(document).ready(function () {
    var thisHash = window.location.hash;
    if (window.location.hash) {
        $(thisHash).fancybox().trigger('click');
    }
    $("[data-fancybox]").click(function () {
        window.location.hash = $(this).attr("id");
        $('[data-fancybox="ajax"]').fancybox({
            modal: false,
            openSpeed: 'slow',
            openEffect: 'elastic',
            closeEffect: 'elastic',
            onClosed: function () {
                window.location.href.split('#')[0];
            }
        });
    });
    $("data-fancybox-close").click(function () {
        window.location.href.substr(0, window.location.href.indexOf('#'));
    });
});

$(document).ready(function () {
    $(".btnsubmitload").click(function () {
        $('body').removeClass('loaded').addClass('loading');
    });
});

$(document).ready(function () {
    $(".btnlog").click(function () {
        dmcvdth();
    });
});

$(document).ready(function () {
    function updateText(event) {
        var input = $(this);
        setTimeout(function () {
            var val = input.val();
            if (val != "") {
                input.parent().addClass("baylen");
                input.addClass("notEmpty");
            } else {
                input.parent().removeClass("baylen");
                input.removeClass("notEmpty");
            }
        }, 1)
    }
    $(".form-group input").keydown(updateText);
    $(".form-group input").change(updateText);
});

$(document).ready(function () {
    $(function () {
        $('.scrollTo').css({
            'height': (($(window).height())) + 'px'
        });
        $('.scrollTo').on('mousewheel', function (e) {
            e.preventDefault();
            if (e.originalEvent.wheelDelta < 0) {
                if (!$(this).is(':last-child'))
                    $('body').scrollTop($(this).next().offset().top);
            } else {
                if (!$(this).is(':first-child'))
                    $('body').scrollTop($(this).prev().offset().top);
            }
        });
        $(window).resize(function () { // On resize
            $('.scrollTo').css({
                'height': (($(window).height())) + 'px'
            });
        });
    });
});

var winHeight = $(window).height(),
    pages = $('.scrollTo'),
    currentPage = 0;
$(window).on('mousewheel DOMMouseScroll', function (e) {
    var direction = 'down',
        $th = $(this),
        currentPageOffset = currentPage * winHeight;

    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        direction = 'up';
    }

    if (direction == 'down' && currentPage <= pages.length - 2) {
        $th.scrollTop(currentPageOffset + winHeight);
        currentPage++;
    } else if (direction == 'up' && currentPage > 0) {
        $th.scrollTop(currentPageOffset - winHeight);
        currentPage--;
    }
});

$(document).ready(function () {
    $('.reservationtime').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        format: 'MM/DD/YYYY h:mm A'
    })
});

$(document).ready(function () {
    var startDate;
    var endDate;
    var d = new Date();
    var namnay = d.getFullYear();
    var namngoai = d.getFullYear() - 1;
    $('.reportrange').daterangepicker({
        startDate: moment().subtract('days', 1),
        endDate: moment().add('days', 1),
        minDate: '01/01/' + namngoai + '',
        maxDate: '12/31/' + namnay + '',
        dateLimit: {
            days: 365
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Ngày mai': [moment().add('days', 1), moment().add('days', 1)],
            'Ngày hôm nay': [moment(), moment()],
            'Ngày hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            '7 ngày gầy đây': [moment().subtract(6, 'days'), moment()],
            '30 ngày qua': [moment().subtract(29, 'days'), moment()],
            'Tháng này': [moment().startOf('month'), moment().endOf('month')],
            'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'left',
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        format: 'DD/MM/YYYY',
        separator: ' to ',
        locale: {
            applyLabel: 'Chọn',
            fromLabel: '<',
            toLabel: '>',
            customRangeLabel: 'Chọn thời gian',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            firstDay: 1
        }
    },
        function (start, end) {
            $('.reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            startDate = start;
            endDate = end;
        }
    );
    $('.reportrange span').html(moment().subtract('days', 29).format('DD/MM/YYYY') + ' - ' + moment().format('DD/MM/YYYY'));
});

$(document).ready(function () {
    $('.width70').each(function () {
        var limit = 200;
        var ellipsis = "...";
        var text = $(this).val();
        if (text.length > limit) {
            var trimmedText = text.substring(0, limit - 4);
            trimmedText += ellipsis;
            $(this).val(trimmedText);
        }
    });
})

$(document).ready(function () {
    $('input[type="number"]').on('keyup', function () {
        v = parseInt($(this).val());
        min = parseInt($(this).attr('min'));
        max = parseInt($(this).attr('max'));

        /*if (v < min){
            $(this).val(min);
        } else */if (v > max) {
            $(this).val(max);
        }
    })
})

$(document).ready(function () {
    $('a[href^="/print/"]').attr('target', '_blank');
    $('a[href^="http://"]').attr('target', '_blank');
    $('a[href^="http://choixanh.net/print/"]').attr('target', '_blank');
})

$(document).ready(function () {
    $("input[type='radio'].clickshowradio").change(function () {
        if ($(this).val() == "1") { $(".radioshowresult").show(); }
        else { $(".radioshowresult").hide(); }
    });
    $("input[type='radio'].clickshowradio2").change(function () {
        if ($(this).val() == "1") { $(".radioshowresult2").show(); }
        else { $(".radioshowresult2").hide(); }
    });
});

$(document).ready(function () {
    $('.luutrucongviec').click(function () {
        var tieudechitieu = $(this).parent().parent().parent().parent().parent().find('.tieudechitieu').val();
        if (tieudechitieu == "") {
            $('.tieudechitieu').addClass('loi');
            return false;
        }
        $('.luutrucongviec').removeClass('btn').removeClass('btn-block').removeClass('btn-danger');
        $.ajax({
            type: 'get',
            url: '/staff/general/luunhanhbaocao.asp',
            data: "noidungtxt=" + tieudechitieu,
            async: false,
            success: function (responseText) {
                $('.luutrucongviec').addClass('btn').addClass('btn-block').addClass('btn-danger');
                $('.luutrucongviec').html(responseText);
                $('.luutrucongviec .tb').fadeIn(1000).delay(5000).slideUp(700);
                $('.luutrucongviec .tb').removeClass('none');
                setTimeout(function () {
                    $('.tieudechitieu').val('');
                    $('.luutrucongviec .tb').addClass('none');
                    $('.luutrucongviec .bt').removeClass('none');
                }, 5000);
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $('.luucuocgoi').click(function () {
        var thoigian = $(this).parent().parent().parent().parent().parent().find('.thoigiancuocgoi').val();
        var sodienthoai = $(this).parent().parent().parent().parent().parent().find('.sodtcuocgoi').val();
        var noidung = $(this).parent().parent().parent().parent().parent().find('.noidungcuocgoi').val();
        $.ajax({
            type: 'post',
            url: '/staff/canhan/nhatky/luucuocgoi.asp',
            data: "txtthoigian=" + thoigian.split(' ').join('___') + "&noidungtxt=" + noidung.split(' ').join('___') + "&Mobile=" + sodienthoai,
            async: false,
            success: function (responseText) {
                $('.luucuocgoi').html(responseText);
                setTimeout(function () {
                    $('.thoigian').val('');
                    $('.sodienthoai').val('');
                    $('.noidung').val('');
                    $('.luucuocgoi').prop("disabled", false);
                }, 60000);
            }
        });
    });
});
$(document).ready(function () {
    $('.luutinnhan').click(function () {
        var thoigian = $(this).parent().parent().parent().parent().parent().find('.thoigiantinnhan').val();
        var sodienthoai = $(this).parent().parent().parent().parent().parent().find('.sodttinnhan').val();
        var noidung = $(this).parent().parent().parent().parent().parent().find('.noidungtinnhan').val();
        $.ajax({
            type: 'post',
            url: '/staff/canhan/nhatky/luutinnhan.asp',
            data: "txtthoigian=" + thoigian.split(' ').join('___') + "&noidungtxt=" + noidung.split(' ').join('___') + "&Mobile=" + sodienthoai,
            async: false,
            success: function (responseText) {
                $('.luutinnhan').html(responseText);
                setTimeout(function () {
                    $('.thoigian').val('');
                    $('.sodienthoai').val('');
                    $('.noidung').val('');
                    $('.luutinnhan').prop("disabled", false);
                }, 60000);
            }
        });
    });
});
$(document).ready(function () {
    $('.luuemail').click(function () {
        var thoigian = $(this).parent().parent().parent().parent().parent().find('.thoigianguimail').val();
        var emailnhan = $(this).parent().parent().parent().parent().parent().find('.diachiemail').val();
        var noidung = $(this).parent().parent().parent().parent().parent().find('.tieudethu').val();
        $.ajax({
            type: 'post',
            url: '/staff/canhan/nhatky/luuemail.asp',
            data: "txtthoigian=" + thoigian.split(' ').join('___') + "&noidungtxt=" + noidung.split(' ').join('___') + "&txtemail=" + emailnhan,
            async: false,
            success: function (responseText) {
                $('.luuemail').html(responseText);
                setTimeout(function () {
                    $('.thoigian').val('');
                    $('.emailnhan').val('');
                    $('.noidung').val('');
                    $('.luuemail').prop("disabled", false);
                }, 60000);
            }
        });
    });
});
$(document).ready(function () {
    $("#formtimkiem").ajaxForm({
        beforeSerialize: function ($Form, options) {
            for (instance in CKEDITOR.instances) {
                CKEDITOR.instances[instance].updateElement();
            }
            return true;
        },
        url: '/staff/general/search.asp',
        type: 'post',
        async: true,
        cache: false,
        success: function (responseText) {
            $(".content-wrapper .content").html(responseText);
        }
    })
});
$(document).ready(function () {
    $(".formthuchiencall").ajaxForm({
        beforeSerialize: function ($Form, options) {
            for (instance in CKEDITOR.instances) {
                CKEDITOR.instances[instance].updateElement();
            }
            return true;
        },
        url: '/api/call/savecall.asp',
        type: 'post',
        async: true,
        cache: false,
        success: function (responseText) {
            $(".formthongbaopopupcenter").html(responseText);
        }
    })
    $('.thuchiencuocgoi').click(function () {
        var sodtcuocgoi = $('.sodtcuocgoi').val();
        var thoigiancuocgoi = $('.thoigiancuocgoi').val();
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        if (thoigiancuocgoi == "" | thoigiancuocgoi == undefined | thoigiancuocgoi == null) {
            $(".baocaoketquacuocgoi").attr('src', '/api/call/makecall.asp?id=' + sodtcuocgoi).css('display', 'inherit').css('position', 'fixed').css('top', '0').css('left', '0').css('width', '100%').css('height', '100%');
            $(".formthuchiencall").hide();
        } else {
            var selected_date = new Date(thoigiancuocgoi);
        }
        var currentDateTimestamp = today.getTime();
        var selectedDateTimestamp = selected_date.getTime();
        if (Math.abs(currentDateTimestamp - selectedDateTimestamp) >= 0) {
            $(".baocaoketquacuocgoi").attr('src', '/api/call/makecall.asp?id=' + sodtcuocgoi).css('display', 'inherit').css('position', 'fixed').css('top', '0').css('left', '0').css('width', '100%').css('height', '100%');
            $(".formthuchiencall").hide();
        }
    });
});
$(document).ready(function () {
    $(".formactionnhantin").ajaxForm({
        beforeSerialize: function ($Form, options) {
            for (instance in CKEDITOR.instances) {
                CKEDITOR.instances[instance].updateElement();
            }
            return true;
        },
        url: '/tongdainhantin/api/sms.asp',
        type: 'post',
        async: true,
        success: function (responseText) {
            $(".formthongbaopopupcenter").html(responseText);
        }
    })
});
$(document).ready(function () {
    $(".formthuchienemail").ajaxForm({
        beforeSerialize: function ($Form, options) {
            for (instance in CKEDITOR.instances) {
                CKEDITOR.instances[instance].updateElement();
            }
            return true;
        },
        url: '/staff/quanly/email/soanmail.asp',
        type: 'post',
        async: true,
        success: function (responseText) {
            $(".formthongbaopopupcenter").html(responseText);
        }
    })
});

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}

$(document).ready(function () {
    var w = screen.width;
    var aw = screen.availWidth;
    if (w > 991) {
        $('.non-header.sidebar-collapse .tlm a').insertBefore('#root_treepa2').addClass('spl');
        $('.non-header.sidebar-collapse .navbar-custom-menu').insertBefore('.main-header');
        $('.non-header header').remove();
        $(".non-cs .thisfooter").css('display', 'none');
        $(".non-cs .showthisfooter").css('display', 'inherit').css('bottom', '54px');
    }
    if (w > 767 && w < 992) {
        $('body').addClass('sidebar-collapse');
    }
    if (w < 600) {
        $(':text').blur();
    }
    if (w < 400) {
        $('.tlm a').insertBefore('#root_treepa2').addClass('spl');
    }
    $('input').css({
        'max-width': (aw - 30) + 'px'
    });
    $('body').addClass('loaded');
    $('body').removeClass('loading');
    $('.dataTables_wrapper .col-md-6').removeClass('col-md-6');
});

function initializeDataTable(tableId, ajaxUrl, columns, orderColumn, orderDirection, noSortColumns) {
    var options = {
        "language": {
            "decimal": " ",
            "emptyTable": "Không có dữ liệu",
            "info": "Hiển thị _START_ đến _END_ [_TOTAL_]",
            "infoEmpty": "Không có kết quả",
            "infoFiltered": "(tìm trong _MAX_ kết quả)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Hiển thị _MENU_ kết quả",
            "loadingRecords": "Đang tải dữ liệu...",
            "processing": "Đang xử lý dữ liệu...",
            "search": "",
            "zeroRecords": "Không tìm thấy dữ liệu theo yêu cầu",
            "paginate": {
                "first": "Đầu",
                "last": "Cuối",
                "next": "Kế",
                "previous": "Trước"
            },
            "aria": {
                "sortAscending": ": Sắp xếp tăng dần",
                "sortDescending": ": Sắp xếp giảm dần"
            }
        },
        "responsive": false,
        "scrollCollapse": false,
        "paging": true,
        "bLengthChange": true,
        "lengthMenu": [[10, 20, 50, 100, 1000, 10000], [10, 20, 50, 100, 1000, 10000]],
        "order": [[orderColumn, orderDirection]],
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': noSortColumns
        }],
        "fixedHeader": true,
        "colReorder": true,
        "drawCallback": function () {
            scrollToTopOnPageClick(this.api().table().container());
        },
        "initComplete": function (settings, json) {
            appendToggleButtons(tableId);
            initializeToggleVis(this.api());
            // addColumnSearch(tableId, this.api());
        }
    };

    if (columns.length > 0) {
        options.columns = columns;
    }

    if (ajaxUrl) {
        options.pageLength = 100;
        options.processing = true;
        options.serverSide = true;
        options.ajax = {
            "url": ajaxUrl,
            "data": function (d) {
                d.pageid = (d.start / d.length) + 1;
            },
            "dataSrc": function (json) {
                var recordsTotal = Number(json.recordsTotal || 0);
                var length = $('#' + tableId).DataTable().page.len() || 100;
                var totalPages = Math.ceil(recordsTotal / length);
                return json.data;
            }
        };
    } else {
        options.pageLength = 50;
        options.processing = false;
        options.serverSide = false;
    }

    var table = $('#' + tableId).DataTable(options);

    return table;
}

function scrollToTopOnPageClick(container) {
    $('.paginate_button:not(.disabled)', container).on('click', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 300);
    });
}

function initializeToggleVis(table) {
    $('a.toggle-vis').on('click', function (e) {
        e.preventDefault();
        var column = table.column($(this).attr('data-column'));
        column.visible(!column.visible());
        table.draw();
    });
}

function appendToggleButtons(tableId) {
    var columnHeaders = $('#' + tableId + ' thead th');
    var buttonClasses = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success', 'btn-info', 'btn-default'];
    var buttonsHtml = '<div class="right">Giảm bớt cột: ';
    columnHeaders.each(function (index) {
        var columnName = $(this).text().trim();
        if (columnName.length > 0) {
            var buttonClass = buttonClasses[Math.floor(Math.random() * buttonClasses.length)];
            buttonsHtml += '<a class="toggle-vis btn btn-xs ' + buttonClass + '" data-column="' + index + '">' + columnName + '</a> ';
        }
    });
    buttonsHtml += '</div>';
    $('#' + tableId + '_filter').append(buttonsHtml);
}

function addColumnSearch(tableId, table) {
    $('#' + tableId + ' thead tr').clone(true).addClass('search-row').appendTo('#' + tableId + ' thead');
    $('#' + tableId + ' thead tr.search-row th').each(function (i) {
        var title = $(this).text();
        if (title.trim().length > 0) { // Kiểm tra title là chuỗi không rỗng
            $(this).html('<input type="text" class="column-search-input" placeholder="Tìm ' + title.toLowerCase() + '" />');
        } else {
            $(this).html('');
        }
        $('input', this).on('keyup change', function () {
            if (table.column(i).search() !== this.value) {
                table.column(i).search(this.value).draw();
            }
        });
    });
}

function cktextarea(name, height, readOnly, linkPost, htmlContent, controlRenderAjax = false) {
    var container = $('#' + name);

    // Nếu đã khởi tạo CKEDITOR trước đó, thì destroy
    if (CKEDITOR.instances[name + '_textarea']) {
        CKEDITOR.instances[name + '_textarea'].destroy(true);
    }

    container.empty(); // xoá nội dung cũ

    var textarea = $('<textarea>', {
        cols: 80,
        id: name + '_textarea',
        name: name,
        rows: 10
    }).val(htmlContent).appendTo(container);

    var editorContent = $('<div>', {
        id: name + '_content',
        style: 'display:none'
    }).appendTo(container);

    setTimeout(function () {
        var editor = CKEDITOR.replace(name + '_textarea', {
            height: height,
            readOnly: readOnly,
            removePlugins: 'exportpdf' // Bỏ plugin gây lỗi nếu không cần
        });

        CKFinder.setupCKEditor(editor, '/admin/ckfinder/');

        if (controlRenderAjax) {
            overrideAllDialogs();
        }
    }, 100);
}

function overrideAllDialogs() {
    CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogDefinition = ev.data.definition;

        var oldOnShow = dialogDefinition.onShow || function () { };

        dialogDefinition.onShow = function () {
            oldOnShow.apply(this, arguments);

            setTimeout(function () {
                let dialog = $('.cke_dialog_container');
                dialog.detach().appendTo('body').css({
                    'position': 'fixed',
                    'z-index': '99999',
                    'top': '50px',
                    'left': '50%',
                    'transform': 'translateX(-50%)',
                    'opacity': '1',
                    'visibility': 'visible'
                });

                let editor = CKEDITOR.currentInstance;
                if (!editor) return;

                let selection = editor.getSelection && editor.getSelection();
                if (!selection) return;

                let element = selection.getStartElement && selection.getStartElement();
                if (!element || typeof element.getName !== 'function') return;

                let tag = element.getName();
                if (tag === 'img') {
                    fillImageFieldsFromElement(element);
                } else if (tag === 'a') {
                    fillHrefFieldsFromElement(element);
                } else if (tag === 'iframe' || tag === 'video') {
                    fillMediaFieldsFromElement(element);
                }
            }, 100);
        };
    });
}


function fillImageFieldsFromElement(element) {
    let imgUrl = element.getAttribute('src') || '';
    let altText = element.getAttribute('alt') || '';
    let style = element.getAttribute('style') || '';

    let widthMatch = style.match(/width:\s*(\d+)px/);
    let heightMatch = style.match(/height:\s*(\d+)px/);
    let width = widthMatch ? widthMatch[1] : '';
    let height = heightMatch ? heightMatch[1] : '';

    let border = element.getAttribute('border') || '';
    let hSpace = element.getAttribute('hspace') || '';
    let vSpace = element.getAttribute('vspace') || '';
    let alignment = element.getStyle ? element.getStyle('text-align') : '';

    $('label').each(function () {
        let labelFor = $(this).attr('for');
        if (!labelFor) return;

        let inputField = $('#' + labelFor);
        let labelText = $(this).text().trim();

        switch (labelText) {
            case 'URL':
                inputField.val(imgUrl);
                break;
            case 'Alternative Text':
                inputField.val(altText);
                break;
            case 'Width':
                inputField.val(width);
                break;
            case 'Height':
                inputField.val(height);
                break;
            case 'Border':
                inputField.val(border);
                break;
            case 'HSpace':
                inputField.val(hSpace);
                break;
            case 'VSpace':
                inputField.val(vSpace);
                break;
            case 'Alignment':
                inputField.val(alignment);
                break;
        }
    });
}

function fillHrefFieldsFromElement(element) {
    let href = element.getAttribute('href') || '';
    let title = element.getAttribute('title') || '';
    let displayText = element.getText ? element.getText() : '';

    $('label').each(function () {
        let labelFor = $(this).attr('for');
        if (!labelFor) return;

        let inputField = $('#' + labelFor);
        let labelText = $(this).text().trim();

        switch (labelText) {
            case 'URL':
                inputField.val(href);
                break;
            case 'Display Text':
                inputField.val(displayText);
                break;
            case 'Title':
                inputField.val(title);
                break;
        }
    });
}

function fillMediaFieldsFromElement(element) {
    let src = element.getAttribute('src') || '';
    let width = element.getAttribute('width') || '';
    let height = element.getAttribute('height') || '';

    $('label').each(function () {
        let labelFor = $(this).attr('for');
        if (!labelFor) return;

        let inputField = $('#' + labelFor);
        let labelText = $(this).text().trim();

        switch (labelText) {
            case 'URL':
                inputField.val(src);
                break;
            case 'Width':
                inputField.val(width);
                break;
            case 'Height':
                inputField.val(height);
                break;
        }
    });
}

function ajaxFormSave(formID, mediaLinks, cssNotification, cssAppendSubmit = '.box-footer', fancyboxClose = true, tableID, triggerButton = false, idDangXuLy, unUploadName = ['ChiTiet', 'TomTat']) {
    let formSubmitting = false;

    function createProgressBar() {
        const $form = $(formID);
        const $container = $form.find(cssAppendSubmit);
        let $progress = $container.find('.progress-upload');

        if ($progress.length === 0) {
            $progress = $(`
				<div class="progress-upload" style="margin-top:10px; display:none;">
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style="width:0%">0%</div>
					</div>
				</div>
			`);
            $container.append($progress);
        } else {
            $progress.find('.progress-bar').css('width', '0%').text('0%');
        }

        return $progress.find('.progress-bar');
    }

    function updateProgress($bar, current, total) {
        const percent = Math.round((current / total) * 100);
        $bar.css('width', percent + '%').text(percent + '%');
    }

    function validateajaxForm($row) {
        let isValid = true;
        $row.find('input, select, textarea').each(function () {
            const $input = $(this);
            const isRequired = $input.prop('required');
            const pattern = $input.attr('pattern');
            $input.next('.invalid-feedback').remove();

            if (isRequired && !$input.val()) {
                isValid = false;
                $input.addClass('error required');
                $input.after('<div class="invalid-feedback" style="color: red;">This field is required.</div>');
            } else if (pattern && !new RegExp(pattern).test($input.val())) {
                isValid = false;
                $input.addClass('error invalid-pattern');
                $input.after('<div class="invalid-feedback" style="color: red;">Invalid format.</div>');
            } else {
                $input.removeClass('error required invalid-pattern');
            }
        });
        return isValid;
    }

    function processField($field) {
        let nameAttr = $field.attr('name')?.toLowerCase() || null;
        let idAttr = $field.attr('id')?.toLowerCase() || null;
        let nameSet = idAttr && nameAttr ? (!/\d/.test(idAttr) ? idAttr : nameAttr) : (idAttr || nameAttr);
        if (nameSet) $field.attr('name', nameSet); else $field.removeAttr('name');
        return nameSet;
    }

    function finalizeSubmit() {
        formSubmitting = false;
        if (fancyboxClose) $.fancybox.close();
    }

    $(document).ready(function () {
        const $form = $(formID);
        let $submitButton = $form.find(cssAppendSubmit).find('button[type="submit"]');
        if ($submitButton.length === 0) {
            $(cssAppendSubmit).append('<button type="submit" class="btn pull-right btn-primary"><i class="fa fa-save"></i> <span>Lưu</span></button>');
            $submitButton = $form.find(cssAppendSubmit).find('button[type="submit"]');
        }
        const $progressBar = createProgressBar();

        function postUnUploadVars(callback) {
            if (!unUploadName?.length) return callback();

            let currentIndex = 0;

            function sendNext() {
                if (currentIndex >= unUploadName.length) {
                    $progressBar.parent().parent().hide();
                    callback();
                    return;
                }

                const varName = unUploadName[currentIndex];
                const ckID = varName + '_textarea';
                const editorInstance = CKEDITOR.instances[ckID];

                if (!editorInstance) {
                    currentIndex++;
                    setTimeout(sendNext, 0);
                    return;
                }

                const value = editorInstance.getData() || "&nbsp;";
                const chunkList = value.match(/(.|[\r\n]){1,4000}/g) || ["&nbsp;"];
                let chunkIndex = 0;
                $progressBar.parent().parent().show();

                function postChunk() {
                    if (chunkIndex >= chunkList.length) {
                        currentIndex++;
                        setTimeout(sendNext, 0);
                        return;
                    }
                    updateProgress($progressBar, chunkIndex + 1, chunkList.length);

                    const chunk = chunkList[chunkIndex];
                    const url = `/admin/blurfunction/${encodeURIComponent(varName)}.asp?id=${idDangXuLy}&l=${chunkIndex + 1}&total=${chunkList.length}`;

                    $submitButton.prop('disabled', true);
                    $submitButton.html('<i class="fa fa-spinner fa-spin"></i> <span>Đang tổng hợp dữ liệu</span>');
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: `${varName}=` + encodeURIComponent(chunk),
                        success: function () {
                            chunkIndex++;
                            postChunk();
                        },
                        error: function (xhr, status, error) {
                            formSubmitting = false;
                            $submitButton.html('<i class="fa fa-save"></i> <span>Lưu</span>').prop('disabled', false);
                        }
                    });
                }
                postChunk();
            }
            sendNext();
        }

        $submitButton.off('click').on('click', function (e) {
            e.preventDefault();
            if (formSubmitting) return;
            formSubmitting = true;

            postUnUploadVars(function () {
                $form.ajaxForm({
                    beforeSerialize: function () {
                        Object.values(CKEDITOR.instances).forEach(instance => instance.updateElement());

                        if (!validateajaxForm($form)) {
                            $submitButton.prop('disabled', true).html('<i class="fa fa-info"></i> <span>Lỗi nhập liệu</span>');
                            formSubmitting = false;
                            return false;
                        }

                        $form.find('input, select, textarea').each(function () {
                            const $field = $(this);
                            const name = $field.attr('name') || '';
                            if (unUploadName.includes(name.trim())) {
                                $field.removeAttr('name');
                            } else processField($field);
                        });

                        $submitButton.prop('disabled', true).html('<i class="fa fa-spinner fa-save"></i> <span>Đang lưu...</span>');
                        return true;
                    },
                    url: Array.isArray(mediaLinks) ? mediaLinks[0] : mediaLinks,
                    type: 'post',
                    async: true,
                    success: function (responseText) {
                        if (Array.isArray(mediaLinks) && mediaLinks.length > 1) {
                            let sendNext = function (i) {
                                if (i < mediaLinks.length) {
                                    $.post(mediaLinks[i], $form.serialize(), function (response) {
                                        if (i === mediaLinks.length - 1 && cssNotification) {
                                            $(cssNotification).html(response).show();
                                            setTimeout(() => $(cssNotification).fadeOut('slow'), 15000);
                                        }
                                        sendNext(i + 1);
                                    }).fail(() => {
                                        formSubmitting = false;
                                        $submitButton.prop('disabled', false).html('<i class="fa fa-save"></i> <span>Lưu</span>');
                                    });
                                } else finalizeSubmit();
                            };
                            sendNext(1);
                        } else {
                            if (cssNotification) {
                                $(cssNotification).html(responseText).show();
                                setTimeout(() => $(cssNotification).fadeOut('slow'), 15000);
                            }
                            finalizeSubmit();
                        }
                    },
                    error: function () {
                        formSubmitting = false;
                        $submitButton.prop('disabled', false).html('<i class="fa fa-save"></i> <span>Lưu</span>');
                    }
                });
                $form.submit();
            });
        });
    });
}

function ckfindermultibox(stateID, mediarootLink, idPart, mediaLink, up1Image, upMultiImages, stateStatus) {
    const container = document.getElementById(stateID);
    if (!container) return;
    const uniqueID = stateID + '_' + Math.random().toString(36).substr(2, 9);
    container.innerHTML = `
        <div class="multipleimages">
            <div class="box-hinhanh">
                ${up1Image ? `
                <div class="box-body">
                    <div class="form-group">
                        <label for="" class="col-sm-2">Hình, mp4</label>
                        <div class="col-sm-10">
                           <div class="input-group">
                                <input type="file" class="Filedata" id="Filedata_${uniqueID}" name="Filedata" />
                                <span class="input-group-btn">
                                    <a class="btn btn-success" onclick="uploadImages('${uniqueID}', '${mediarootLink}', '${idPart}', '${mediaLink}')">Up từng hình</a>
                                </span>
                           </div>
                        </div>
                    </div>
                </div>` : ''}
                ${upMultiImages ? `
                <div class="box-body drop-area">
                    <span>Kéo thư mục hình vào đây hoặc </span>
                    <span class="btn btn-default btn-file">
                      up nguyên thư mục hình <input type="file" class="hiddenFileInput" id="hiddenFileInput_${uniqueID}" name="Filedata" multiple>
                    </span>
                </div>` : ''}
            </div>
            <div class="col-md-12">
                <div class="box-body">
                    <div class="container-fluid">
                        <div class="row image-container" id="imageContainer_${uniqueID}"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    if (upMultiImages) {
        document.getElementById(`hiddenFileInput_${uniqueID}`).addEventListener('change', function (event) {
            var files = event.target.files;
            for (var i = 0; i < files.length; i++) {
                uploadImage(files[i], uniqueID, mediarootLink, idPart, mediaLink);
            }
            this.value = '';
        });
        document.querySelector(`#${stateID} .drop-area`).addEventListener('click', function () {
            document.getElementById(`hiddenFileInput_${uniqueID}`).click();
        });
        document.querySelector(`#${stateID} .drop-area`).addEventListener('dragover', function (event) {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        });
        document.querySelector(`#${stateID} .drop-area`).addEventListener('drop', function (event) {
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer.files;
            for (var i = 0; i < files.length; i++) {
                uploadImage(files[i], uniqueID, mediarootLink, idPart, mediaLink);
            }
        });
    }
    fetchData(uniqueID, idPart, mediaLink);
    function isValidFileType(fileName) {
        var validExtensions = ['png', 'jpg', 'gif', 'mp4'];
        var fileExtension = fileName.split('.').pop().toLowerCase();
        return validExtensions.includes(fileExtension);
    }
    async function fetchData(uniqueID, idPart, mediaLink) {
        try {
            const response = await fetch(`${mediaLink}json.idpart.asp?id=${idPart}`);
            const jsonData = await response.json();
            displayData(jsonData, uniqueID, mediaLink);
        } catch (error) {
        }
    }
    async function deleteImage(id, imageLink, uniqueID, idPart, mediaLink) {
        if (!stateStatus) return;
        try {
            const fileName = imageLink.split('/').pop();
            const response = await fetch(`${mediaLink}upload-delete.asp?id1=${id}&filecanxoa=${fileName}&IDPart=${idPart}`);
            const imageCard = document.getElementById(`imageCard_${uniqueID}_${id}`);
            if (imageCard) {
                imageCard.style.display = 'none';
            }
        } catch (error) {
        }
    }
    async function updateTitle(id, currentTitleElement, uniqueID, idPart, mediaLink) {
        if (!stateStatus) return;
        const newTitle = prompt("Tên hình:", currentTitleElement.textContent);
        if (newTitle !== null) {
            try {
                const response = await fetch(`${mediaLink}upload-uptieude.asp?id1=${id}&TenHinhAnh=${encodeURIComponent(newTitle)}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const resultText = await response.text();
                if (resultText.includes("Update successful")) {
                    currentTitleElement.textContent = `${newTitle}`;
                } else {
                }
            } catch (error) {
            }
        }
    }
    function displayData(jsonData, uniqueID, mediaLink) {
        const imageContainer = document.getElementById(`imageContainer_${uniqueID}`);
        imageContainer.innerHTML = "";
        jsonData.forEach(imageData => {
            const imageCard = document.createElement("div");
            imageCard.id = `imageCard_${uniqueID}_${imageData.id}`;
            imageCard.classList.add("col-lg-2", "col-md-3", "col-sm-4", "col-xs-6", "image-card");
            const fileExtension = imageData.hinhdaidien.split('.').pop();
            let mediaElement;
            if (fileExtension === 'mp4') {
                mediaElement = document.createElement("a");
                mediaElement.href = imageData.hinhdaidien;
                mediaElement.dataset.fancybox = "gallery";
                mediaElement.dataset.src = imageData.hinhdaidien;
                mediaElement.innerHTML = `<video controls style="max-width: 100%; height: auto;"><source src="${imageData.hinhdaidien}" type="video/mp4"></video>`;
            } else {
                mediaElement = document.createElement("a");
                mediaElement.href = imageData.hinhdaidien;
                mediaElement.dataset.fancybox = "gallery";
                mediaElement.dataset.src = imageData.hinhdaidien;
                mediaElement.innerHTML = `<img src="${imageData.hinhdaidien}" alt="Image ${imageData.id}" style="max-width: 100%; height: auto;">`;
            }
            const title = document.createElement("p");
            title.textContent = `${imageData.tieude}`;
            title.classList.add("text", "text-danger");
            title.style.cursor = "pointer";
            title.onclick = function () {
                updateTitle(imageData.id, title, uniqueID, idPart, mediaLink);
            };
            const editIcon = document.createElement("i");
            editIcon.classList.add("fas", "fa-edit", "edit-icon");
            editIcon.onclick = function () {
                updateTitle(imageData.id, title, uniqueID, idPart, mediaLink);
            };
            const deleteLink = document.createElement("a");
            deleteLink.href = "#";
            deleteLink.innerHTML = '<i class="fa fa-close"></i> Xóa';
            deleteLink.classList.add("btn", "btn-xs", "btn-danger", "pull-right", "delete-link");
            deleteLink.onclick = function () {
                deleteImage(imageData.id, imageData.hinhdaidien, uniqueID, idPart, mediaLink);
            };
            imageCard.appendChild(mediaElement);
            title.appendChild(editIcon);
            imageCard.appendChild(title);
            if (stateStatus) {
                imageCard.appendChild(deleteLink);
            }
            imageContainer.appendChild(imageCard);
        });
    }
    var mediarootPath = mediarootLink + idPart + '/';
    function clearFileInput(uniqueID) {
        var fileInput = document.getElementById(`Filedata_${uniqueID}`);
        fileInput.value = "";
    }
    function uploadImages(uniqueID, mediarootLink, idPart, mediaLink) {
        var fileInput = document.getElementById(`Filedata_${uniqueID}`);
        var files = fileInput.files;
        if (files.length === 0) {
            return;
        }
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!isValidFileType(file.name)) {
                continue;
            }
            formData.append('upload', file, file.name);
        }
        var uploadUrl = `${mediaLink}core/connector/asp/connector.asp?command=FileUpload&type=Images&currentFolder=${encodeURIComponent(mediarootPath)}&response_type=txt`;
        $.ajax({
            type: 'POST',
            url: uploadUrl,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                var uploadedFileName = extractFileName(response);
                $.ajax({
                    type: 'POST',
                    url: `${mediaLink}upload-save.asp`,
                    data: {
                        'id': idPart,
                        'HinhDaiDien': `${mediarootLink}${idPart}/${uploadedFileName}`
                    },
                    success: function (reportResponse) {
                        fetchData(uniqueID, idPart, mediaLink);
                        clearFileInput(uniqueID);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    }
    function extractFileName(response) {
        var fileNameEnd = response.indexOf('|');
        if (fileNameEnd !== -1) {
            return response.substring(0, fileNameEnd).trim();
        } else {
            return null;
        }
    }
    function uploadImage(file, uniqueID, mediarootLink, idPart, mediaLink) {
        if (!isValidFileType(file.name)) {
            return;
        }
        var formData = new FormData();
        formData.append('upload', file, file.name);
        var uploadUrl = `${mediaLink}core/connector/asp/connector.asp?command=FileUpload&type=Images&currentFolder=${encodeURIComponent(mediarootPath)}&response_type=txt`;
        $.ajax({
            type: 'POST',
            url: uploadUrl,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                var uploadedFileName = extractFileName(response);
                $.ajax({
                    type: 'POST',
                    url: `${mediaLink}upload-save.asp`,
                    data: {
                        'id': idPart,
                        'HinhDaiDien': `${mediarootLink}${idPart}/${uploadedFileName}`
                    },
                    success: function (reportResponse) {
                        fetchData(uniqueID, idPart, mediaLink);
                        clearFileInput(uniqueID);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
                fetchData(uniqueID, idPart, mediaLink);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    }
}

function GetQuanTriMulti(strclass, id) {
    $.ajax({
        type: 'post',
        url: "/admin/part/detail/boloc.asp",
        data: "q=" + id,
        async: true,
        success: function (responseText) {
            $("." + strclass).html(responseText);
        }
    });
}

function createFolder(pathParent, pathChild, folderName) {
    $.ajax({
        url: `/admin/api/createfolder.asp?id=${encodeURIComponent(pathParent)}&id1=${encodeURIComponent(pathChild)}&id2=${encodeURIComponent(folderName)}`,
        type: 'POST',
        success: function (response) {
        },
        error: function (xhr, status, error) {
            //console.error('Có lỗi xảy ra khi tạo thư mục:', error);
        }
    });
}

$('.bottomarea').show();
$('.readonly .read').attr('disabled', true);
$('input').each(function () {
    if ($(this).val()) {
        $(this).addClass("notEmpty");
    }
});
$('.sections .section').css({ 'height': (($(window).height())) + 'px' });
$('.fancybox-content').addClass('col-md-12');
$('.tlm').removeClass('none').show('slow');
$('.lionbars').lionbars();
$('.select2').select2().css('width', '100%'); //Bắt buộc phải để ngoài jquery document ready

$(document).on('click', '.xemketquathis', function () {
    const id = $(this).data('id');
    if (!id) return;

    fetch(`/ww2/module.poll.asp?id=${id}`)
        .then(res => res.json())
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) return;
            const poll = data[0];
            showPollResult(poll);
        })
        .catch(error => {
            console.error('Lỗi khi lấy dữ liệu khảo sát:', error);
            alert('Không thể tải dữ liệu khảo sát. Vui lòng thử lại sau.');
        });
});

function showPollResult(poll) {
    let totalVotes = poll.data.reduce((sum, opt) => sum + parseInt(opt.luotxem || 0), 0);

    const colorPalette = [
        getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim() || '#0d6efd',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-secondary').trim() || '#6c757d',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-success').trim() || '#198754',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-danger').trim() || '#dc3545',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-warning').trim() || '#ffc107',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-info').trim() || '#0dcaf0',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-dark').trim() || '#212529',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-indigo').trim() || '#6610f2',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-teal').trim() || '#20c997',
        getComputedStyle(document.documentElement).getPropertyValue('--bs-purple').trim() || '#6f42c1'
    ];

    let chartHtml = `
        <div style="width:100%; max-width:950px; padding:20px;">
            <h5 class="text-center mb-4">Kết quả khảo sát</h5>
            <div class="row">
                <div class="col-md-6">
                    <h6 class="text-center">Biểu đồ cột</h6>
                    <div id="pollChartMorrisBar" style="height: 400px; position: relative;"></div>
                </div>
                <div class="col-md-6">
                    <h6 class="text-center">Biểu đồ tròn</h6>
                    <div id="pollChartMorrisDonut" style="height: 400px;"></div>
                </div>
            </div>
        </div>
    `;

    $.fancybox.open({
        src: chartHtml,
        type: 'html',
        smallBtn: true,
        width: 1000,
        height: 'auto',
        touch: false,
        afterShow: function () {
            const chartData = poll.data.map((opt, idx) => ({
                label: opt.tieude,
                value: parseInt(opt.luotxem),
                percent: totalVotes ? ((parseInt(opt.luotxem) / totalVotes) * 100).toFixed(1) : 0,
                color: colorPalette[idx % colorPalette.length]
            }));

            Morris.Bar({
                element: 'pollChartMorrisBar',
                data: chartData,
                xkey: 'label',
                ykeys: ['value'],
                labels: ['Số lượt bình chọn'],
                barColors: chartData.map(item => item.color),
                resize: true,
                hideHover: false,
                hoverCallback: function (index, options, content, row) {
                    return `<b>${row.label}</b><br>${row.value} lượt chọn (${row.percent}%)`;
                }
            });

            Morris.Donut({
                element: 'pollChartMorrisDonut',
                data: chartData,
                colors: chartData.map(item => item.color),
                resize: true,
                formatter: function (value, data) {
                    return data.label + ': ' + value + ' lượt chọn (' + data.percent + '%)';
                }
            });
        }
    });
}
