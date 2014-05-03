$('a.btn.btn-custom.btn-lg').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');
});

$(".modal-footer").on('click',function(e) {$('#myModal').modal('hide')});


