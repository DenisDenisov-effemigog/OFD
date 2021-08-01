$(document).ready(function () {

    $('.order__nested-btn').click(function () {
        $('.order__nested-list').not($(this).prev()).slideUp(800)
        $('.order__nested-btn').not($(this)).removeClass('order__nested-btn--active')
        
        $(this).prev().slideToggle(1500)
        $(this).toggleClass('order__nested-btn--active')

        $('.order__nested-btn .order__nested-btn-text').text('Подробнее')
        $('.order__nested-btn--active .order__nested-btn-text').text('Свернуть')
    })

})