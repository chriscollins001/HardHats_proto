function ToggleSearch() {
  if ($('.search-control').is(':visible')) {
    $('.search-control, .sort-control').hide();
    $('.btn-search').removeClass('active');
  }
  else {
    $('.search-control, .sort-control').show();
    $('.btn-search').addClass('active');
  }
}

function UpdateSort() {
  var inputSort = $('.input-sort').val();
  var inputSortDirection = $('.input-sort-direction').val();

  if (inputSort == 'a' && inputSortDirection == 'a') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return $(a).data('author') > $(b).data('author');
    }).appendTo('.row-document-container');
  }
  else if (inputSort == 'a' && inputSortDirection == 'd') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return $(a).data('author') < $(b).data('author');
    }).appendTo('.row-document-container');
  }
  if (inputSort == 'n' && inputSortDirection == 'a') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return $(a).data('name') > $(b).data('name');
    }).appendTo('.row-document-container');
  }
  else if (inputSort == 'n' && inputSortDirection == 'd') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return $(a).data('name') < $(b).data('name');
    }).appendTo('.row-document-container');
  }
  else if (inputSort == 'd' && inputSortDirection == 'a') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return new Date($(a).data('date')) > new Date($(b).data('date'));
    }).appendTo('.row-document-container');
  }
  else if (inputSort == 'd' && inputSortDirection == 'd') {
    $('.row-document-container .row-document').sort(function(a,b) {
         return new Date($(a).data('date')) < new Date($(b).data('date'));
    }).appendTo('.row-document-container');
  }
}

function SearchDocuments() {
  var value = $('.input-search').val();
  if (value != '') {
    $('.row-document').hide();

    var visibleDocs = $('.row-document').filter(function() {
        return $(this).attr('data-name').toLowerCase().indexOf(value) > -1 || $(this).attr('data-author').toLowerCase().indexOf(value) > -1 || $(this).attr('data-description').toLowerCase().indexOf(value) > -1;
    });

    $(visibleDocs).show();
  }
}

function ToggleSideMenu(show) {
    $('.side-menu').toggle('slide');
}
