$(function() {
    var $container = $('.companies-list');
    // init
    $container.isotope({
      // options
      itemSelector: '.company',
      layoutMode: 'fitRows',
      getSortData: {
        name: '[data-name]',
        nameDes: '[data-name]',
        year: '[data-year] parseInt',
        yearDes: '[data-year] parseInt',
        relevance: '[data-relevance] parseInt'
      },
      sortAscending: {
        name: true,
        nameDes: false,
        year: true,
        yearDes: false,
        relevance: false
      }
    });

    // sort items on button click
    $('#sorts').on( 'click', 'a', function(e) {
      var sortByValue = $(this).attr('data-sort-by');
      $container.isotope({ sortBy: sortByValue });
      e.preventDefault();
      return false;
    });

    // filter items on button click
    $('#filters').on( 'click', 'button', function(e) {
      var filterValue = $(this).attr('data-filter');
      $(this).addClass('active');
      $container.isotope({ filter: filterValue });
    });
});