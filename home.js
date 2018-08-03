function ToggleSearch() {
  if ($('.search-control').is(':visible')) {
    $('.search-control, .sort-control').hide();
    $('btn-search').removeClass('active');
  }
  else {
    $('.search-control, .sort-control').show();
    $('btn-add').addClass('active');
  }
}
