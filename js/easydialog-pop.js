;(function(window,undefined){
    var pop={
        init:function(opts){
            easyDialog.open({
                container: {
                    content: opts.con,
                    noText: 'Close',
                    yesText:'YES',
                    yesFn : opts.yesFn,
                    noFn: true
                }
            });
        },
        addCart:function(opts){
            easyDialog.open({
                container: {
                    content: opts.con,
                    noText: '<apan style="color:#f60;">OK</apan>',
                    yesText:'<span >GO TO CART</span>',
                    yesFn : opts.yesFn,
                    noFn: true
                }
            });
        }
    };
    window.pop=pop;
})(window);