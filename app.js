const onload = () => {
    let playercounter = 0;
    const addingX = (box) => {
            box.append("X");
    }
    const addingO = (box) => {
            box.append("O");
    }
    let gameBoard = [[],[],[]];
    const checkResult = () => {
        sq1 = $('.grid1').text();
        sq2 = $('.grid2').text();
        sq3 = $('.grid3').text();
        sq4 = $('.grid4').text();
        sq5 = $('.grid5').text();
        sq6 = $('.grid6').text();
        sq7 = $('.grid7').text();
        sq8 = $('.grid8').text();
        sq9 = $('.grid9').text();
        
        if ((sq1 === sq2) && (sq2 === sq3) && (sq1.length > 0)) {
            $('.results').text(`${sq1} wins`);
        } else if ((sq4 === sq5) && (sq5 === sq6) && (sq4.length > 0)) {
            $('.results').text(`${sq4} wins`);
        } else if ((sq7 === sq8) && (sq8 === sq9) && (sq7.length > 0)) {
            $('.results').text(`${sq7} wins`);
        } else if ((sq1 === sq4) && (sq4 === sq7) && (sq1.length > 0)) {
            $('.results').text(`${sq1} wins`);
        } else if ((sq2 === sq5) && (sq5 === sq8) && (sq2.length > 0)) {
            $('.results').text(`${sq2} wins`);
        } else if ((sq3 === sq6) && (sq6 === sq9) && (sq3.length > 0)) {
            $('.results').text(`${sq3} wins`);
        } else if ((sq1 === sq5) && (sq5 === sq9) && (sq1.length > 0)) {
            $('.results').text(`${sq1} wins`);
        } else if ((sq3 === sq5) && (sq5 === sq7) && (sq3.length > 0)) {
            $('.results').text(`${sq3} wins`);
        } else if ((sq1.length + sq2.length + sq3.length + sq4.length + sq5.length + sq6.length + sq7.length + sq8.length + sq9.length) === 9) {
            $('.results').text("It's a draw");
        }
    }
   $('.box').click(function() {
           if ((playercounter % 2 === 0) && ($(this).text().length < 1)) {
               addingX($(this));
               playercounter++;
               checkResult();
           } else if ((playercounter % 2 === 1) && ($(this).text().length < 1)) {
               addingO($(this));
               playercounter++;
               checkResult();
           }
    })
}
$(onload); 