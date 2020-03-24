$("#yy").on("submit", function(event){
    event.preventDefault();
    let data = {};
    data.name = $("#name").val();
    data.email = $("#email").val();
    data.subjekt = $("#subject").val();
    data.message = $("#message").val();

    console.log(data);
    $.ajax("https://jsonplaceholder.typicode.com/photos",{
method:"GET",
    }).done(function(response) {
        let random = Math.floor(500* Math.random());
        let imgUrl = response[random].thumbnailUrl;
        let img = $ ("<img/>").attr ("src", imgUrl);
        $("body").append(img);
    });
});
