$(document).ready(function() {
  $('div.amenities LI INPUT').on('change', function() {
    const dictionary = {}
    if ($(this).prop('checked')) {
      dictionary[($(this).attr('data-id'))] = $(this).attr('data-name')
    } else {
      delete dictionary[($(this).attr('data-id'))];
    }
    $('div.amenities H4').html(Object.values(dictionary).join(', '));
  })
});
