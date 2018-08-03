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
