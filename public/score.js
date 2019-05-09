function getScores() {
    let name = "";
    var board = document.getElementById("board");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    var scores = firebase.database().ref("scores/").orderByChild("score");
    score.orderByValue().limitToFirst10;
    console.log(scores);
    scores.on(
        "value",
        function (snap) {
            snap.forEach(function (snap) {
                name = snap.key;
                e = firebase.database().ref("scores/" + snap.key);
                e.orderByChild("score").limitToLast(1).on(
                    "child_added",
                    function (snop) {
                        att = document.createAttribute("class");
                        att.value = "nes-container is-rounded left";
                        attr = document.createAttribute("class");
                        attr.value = "nes-icon trophy";
                        value = snop.val();
                        divs = document.createElement("div");
                        divs.setAttributeNode(att);
                        board.appendChild(divs);
                        trophy = document.createElement("i");
                        trophy.setAttributeNode(attr);
                        user = document.createElement("p");
                        usa = document.createElement("span");
                        usa.innerHTML = name;
                        user.innerHTML = "User: ";
                        user.appendChild(usa);
                        board.appendChild(user);
                        score = document.createElement("p");
                        scor = document.createElement("span");
                        scor.innerHTML = value;
                        score.innerHTML = "Score: ";
                        score.appendChild(scor);
                        board.appendChild(score);
//https://moretest-22401.firebaseapp.com/engine/index.html
                    }
                )
            })

        }
    )
    
}