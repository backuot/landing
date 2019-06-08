import '../scss/form-select.scss';
import jQuery from 'jquery';

(function($, undefined){
  $('.js-form-select').on('click', function(){
    $(".js-form-select__list").slideToggle('fast');
  });

  $('.js-form-select__list-item').click(function(){
    var text = $(this).html();
    $(".js-form-select__selected-value").html(text);
  });
})(jQuery);
