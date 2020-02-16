$(function () {
  const dictionary = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        dictionary[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete dictionary[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(dictionary).join(', ') || '&nbsp;');
    });
});
