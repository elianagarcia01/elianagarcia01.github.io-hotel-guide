$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $(".carousel").carousel({
        interval: 2000
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        console.log("el modal contacto se esta mostrando")
        $('#contactoBtn').removeClass("btn-outline-success")
        $('#contactoBtn').addClass("btn-primary")
        $('#contactoBtn').prop("disabled", true)
    })

    $('#exampleModal').on('shown.bs.modal', function (e) {
        console.log("el modal contacto se mostró")
    })

    $('#exampleModal').on('hide.bs.modal', function (e) {
        console.log("el modal contacto se oculta")
    })
    $('#exampleModal').on('hidden.bs.modal', function (e) {
        console.log("el modal contacto se ocultó")
        $('#contactoBtn').prop("disabled", false)
    })

});