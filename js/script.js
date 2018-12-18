

$(function() {
    let lastAdded = 'all',
        $alertBox = $('.alert-box');
    $('select').change(function() {

        $alertBox.removeClass(lastAdded).addClass(this.value);
        lastAdded = this.value;
    });
});