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
const players = {

"Zyvix":{

role:"CAPTAIN",
img:"logo.png",
wins:"12",
goals:"85",
mvp:"8",
bio:"Team captain and competitive Rocket League player."

},


"Taiqz":{

role:"PLAYER",
img:"logo.png",
wins:"7",
goals:"60",
mvp:"4",
bio:"Fast player with strong mechanics."

},


"Real Vexy":{

role:"PLAYER",
img:"logo.png",
wins:"5",
goals:"45",
mvp:"3",
bio:"Focused on improvement and teamwork."

}

};



function openPlayer(name){

let p=players[name];


document.getElementById("playerModal").style.display="flex";

document.getElementById("profileName").innerHTML=name;

document.getElementById("profileRole").innerHTML=p.role;

document.getElementById("profileImg").src=p.img;

document.getElementById("wins").innerHTML=p.wins;

document.getElementById("goals").innerHTML=p.goals;

document.getElementById("mvp").innerHTML=p.mvp;

document.getElementById("profileBio").innerHTML=p.bio;


}



function closePlayer(){

document.getElementById("playerModal").style.display="none";

}
const players = {

zyvix:{
name:"Zyvix",
role:"CAPTAIN",
info:"Team captain of KEZEA Esports.",
wins:"12",
goals:"85",
mvp:"8"
},


taiqz:{
name:"Taiqz",
role:"PLAYER",
info:"Competitive Rocket League player.",
wins:"7",
goals:"60",
mvp:"5"
},


vexy:{
name:"Real Vexy",
role:"PLAYER",
info:"KEZEA player focused on winning.",
wins:"5",
goals:"45",
mvp:"3"
}

};



function openPlayer(player){

let data = players[player];

document.getElementById("popup-name").innerHTML = data.name;
document.getElementById("popup-role").innerHTML = data.role;
document.getElementById("popup-info").innerHTML = data.info;

document.getElementById("popup-wins").innerHTML = data.wins;
document.getElementById("popup-goals").innerHTML = data.goals;
document.getElementById("popup-mvp").innerHTML = data.mvp;


document.getElementById("player-popup").style.display="flex";

}



function closePlayer(){

document.getElementById("player-popup").style.display="none";

}
