const divBlocks = $('div:eq(1) > p:eq(2)');
console.log(divBlocks);

const result = [$('div:eq(1) > p:eq(0)').text(), $('div:eq(1) > p:eq(1)').text(), $('div:eq(1) > p:eq(2)').text() ];
console.log(result);

for (var i = 0; i < 1; i++) {
    var count = 0;
        setInterval(function() {
            setTimeout(function() { 
                console.log(++count);
                if (count >= 10) {
                    count -= count;
                }
            }, 1000);
    }, 1000);
}