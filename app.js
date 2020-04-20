var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(document).ready(function()
{

    var lang = getUrlParameter('lang');
    if(typeof lang == "undefined") { lang = 'dv' }

        console.log(lang)
    
    $('.lang').hide();
    $('.lang.show_' + lang).show();

    if(lang == "dv")
    {
        $(".direction").addClass('rtl');
    }


});