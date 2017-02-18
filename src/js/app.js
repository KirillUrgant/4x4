$(function () {
    function animateBlock (block) {
        block.addClass("item-block_active");
        addConsole("animation start");

        setTimeout(function() {
            addConsole("animation end");
            var next = block.parent().next().find(".item-block");

            if (next.length) {
                animateBlock(next)
            } else {
                addConsole("end progress");
                alert("Done!");
                reset();
            }
        }, 1000);

        return true;
    }

    function addConsole(text) {
        $(".console").append("<p class='console__item'>~ "+text+"</p>")
    }

    function reset() {
        $(".item-block").removeClass("item-block_active");
        $(".button").text("start");
    }

    $(".button").on('click', function (e) {
        e.preventDefault();
        $(this).text("in progress...");
        addConsole("start progress");

        animateBlock($(".col:first-child .item-block"));
    })
});