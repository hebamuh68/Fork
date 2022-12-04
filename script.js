(function () {
    'use strict';


    //make_card("appetizer_menu", "appetizer", "ap");    
    const Appetizer_btn = document.getElementById('Appetizer');
    const Main_Course_btn = document.getElementById('Main_Course');
    const Special_Offer_btn = document.getElementById('Special_Offer');
    const Soup_btn = document.getElementById('Soup');
    const Desserts_btn = document.getElementById('Desserts');
    const Drinks_Tea_btn = document.getElementById('Drinks_Tea');


    //Appear always
    make_card("appetizer", "ap");

    Appetizer_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("appetizer", "ap");
    });

    Main_Course_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("main_course", "m");
    });

    Special_Offer_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("specials", "sp");
    });

    Soup_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("soup", "s");
    });

    Desserts_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("desserts", "d");
    });

    Drinks_Tea_btn.addEventListener('click', function (event) {
        event.preventDefault();
        reset_menus()
        make_card("drinks", "dr");
    });


    function make_card(Wmenu, imgSrc) {

        document.querySelector(`#card1 img`).src = `images/${Wmenu}/${imgSrc}${1}.png`;

        for (let i = 2; i <= 7; i++) {

            var new_card = document.querySelector('#card1');
            var clone = new_card.cloneNode(true);
            clone.id = `card${i}`;

            if (i > 4) {
                document.getElementById('cards_row2').append(clone);
            } else {
                document.getElementById('cards_row1').append(clone);
            }

            document.querySelector(`#card${i} img`).src = `images/${Wmenu}/${imgSrc}${i}.png`;
        }

        document.getElementById("Main_menu").append(cards_row1);
        document.getElementById("Main_menu").append(cards_row2);


    }


    function reset_menus() {

        for (let i = 2; i <= 4; i++) {

            const element = document.getElementById(`card${i}`);
            element.remove();
        }

        for (let i = 5; i <= 7; i++) {

            const element = document.getElementById(`card${i}`);
            element.remove();
        }
    }

//============================================ Review ===============================================

    /*make_review()

    function make_review() {
        for (let i = 1; i <= 2; i++) {

            var new_review = document.querySelector('#review_card');
            var rev_clone = new_review.cloneNode(true);
            rev_clone.id = `review_card${i}`;
            
            document.getElementById("review").append(rev_clone);
      }

    }*/

})();