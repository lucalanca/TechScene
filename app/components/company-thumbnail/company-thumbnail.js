define(['jquery'], function($) {
    'use strict';

    var $detailView = $('.l-detail-view'),
        $activeCompany;
    $('.company-thumbnail-header, .company-thumbnail-details').click(function(event) {
        $activeCompany = $(this).parent();
        var companyDetailView = $activeCompany.addClass('active').children('.company-detail-view').html();
        $detailView.html(companyDetailView).addClass('active');
        event.preventDefault();
        event.stopPropagation();

    })

    $('body').click(function() {
        if ($activeCompany) {
            $detailView.removeClass('active');
            $activeCompany.removeClass('active');
            event.preventDefault();
            event.stopPropagation();
        }
    });
});