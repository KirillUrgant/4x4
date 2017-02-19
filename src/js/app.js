$(function () {
    var time = 1000,
        timeSlice = 400,
        $button = $(".button");

    function animateBlock (block) {
        block.addClass("item-block_active");
        addConsole("item "+block.data('id')+" animation start");

        setTimeout(function() {
            addConsole("item "+block.data('id')+" animation end");
        }, time);

        setTimeout(function () {
            var nextId = block.data('id') + 1,
                nextItem = $("*[data-id='" + nextId + "']");

            if (nextItem.length) {
                animateBlock(nextItem)
            } else {
                reset();
            }
        }, time - timeSlice);

        return true;
    }

    function addConsole(text) {
        $(".console").append("<p class='console__item'>~ "+text+"</p>")
    }

    function reset() {
        setTimeout(function () {
            addConsole("end progress");
            alert("Done!");
            $(".item-block").removeClass("item-block_active");
            $button.text("start");
            $button.on('click', buttonClick);
        }, timeSlice);
    }

    $button.on('click', buttonClick);

    function buttonClick(e) {
        e.preventDefault();
        var $this = $(this);

        $this.text("in progress...");
        addConsole("start progress");

        animateBlock($("*[data-id='1']"));
        $this.off('click');
    }
});