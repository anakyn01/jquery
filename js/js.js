$(function(){//문서가 로드되기전에 실행되는걸 방지

    $("#hide").click(function(){
        $("p.one").hide();
    });
    $("#show").click(function(){
        $("p.one").show();
    })
})