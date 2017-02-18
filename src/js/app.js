$(function () {
    function animateBlock (block) {
        block.addClass("item-block_active");
        setTimeout(function() {
            var next = block.parent().next().find(".item-block");

            if (next.length) {
                animateBlock(next)
            } else {
                alert("Done!")
            }
        }, 300);

        return true;
    }

    function addConsole(text) {
        $(".console").append("<p class='console__item'>"+text+"</p>")
    }

    $(".button").on('click', function (e) {
        e.preventDefault();
        $(this).text("in progress...");

        animateBlock($(".col:first-child .item-block"));
    })
});