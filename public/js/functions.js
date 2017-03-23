$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
    });
});

$(document).ready(function () {
$('label.tree-toggler').parent().children('ul.tree').toggle(300);
});
