function openPlayer(name,role,rank,info){

    document.getElementById("playerModal").style.display="flex";

    document.getElementById("playerName").innerHTML=name;

    document.getElementById("playerRole").innerHTML=role;

    document.getElementById("playerRank").innerHTML="Rank: "+rank;

    document.getElementById("playerInfo").innerHTML=info;

}



function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}
