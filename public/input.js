

document.addEventListener('DOMContentLoaded', event => {
    // userId is the reference that we talked about, use it to create an association between auth and database
    let userId;
    let isIn = false;
    clicked = true;
    $(".lead").click(function() {
        if ( $( '.mod' ).is( ":hidden" ) ) {
            // getScores();
            $( ".mod" ).slideDown( "slow" );
        } else {
            $( ".mod" ).slideUp('slow');
        };
    });
    $(".lead-exit").click(function () {
        $( ".mod" ).slideUp('slow');
    });
    $(".set").click(function(){
        if ( $('.settings').is(":hidden")){
            $(".settings").slideDown("slow");
        };
    });
    $(".retButton").click(function(){
        $(".settings").slideUp("fast");
    });
    $(".helpButton").click(function(){
        if( $('.help').is(":hidden")){
            $(".help").slideDown("slow");
        };
    });
    $(".helpReturn").click(function(){
        $(".help").slideUp("fast");
    });
    var provider = new firebase.auth.GoogleAuthProvider();

    function googleSignin() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            userId = result.user.uid;
            console.log(token)
            console.log(user)

            isIn = true;
            $('#login').text('Logout');
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)

        });





    }

    function googleSignOut(){
        firebase.auth().signOut().then(function() {
            console.log("We gooooot")
            $('#login').text('Login');
        }).catch(function(error) {
            console.log("We got fuuuuucked")
        });
    }

    $("#login").click( function () {
        let value = $('#login').text();
        if(value === 'Login') {
            googleSignin()
        } else {
            googleSignOut();

        }

    });


    // Will add  a function to check if they have an user name
    //if the user doesn't have, create a pop up and ask for a user id.

});