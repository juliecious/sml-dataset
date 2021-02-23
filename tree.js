$(function() {
    $('.tree').treegrid({
        expanderExpandedClass: 'glyphicon glyphicon-minus',
        expanderCollapsedClass: 'glyphicon glyphicon-plus'
    });

    $('#expand_btn').on('click', function () {
        $('.tree').treegrid('expandAll');
    });

    $('#collpase_btn').on('click', function () {
        $('.tree').treegrid('collapseAll');
    });
});
