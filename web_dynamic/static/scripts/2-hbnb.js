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

  const url = 'http://0.0.0.0:5001/api/v1/status/'
  $.getJSON(url, (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
