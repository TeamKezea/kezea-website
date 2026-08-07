<script>

const players = {


zyvix:{
name:"Zyvix",
role:"CAPTAIN",
info:"Team captain of KEZEA Esports. Competitive Rocket League player focused on teamwork and winning.",
wins:"12",
goals:"85",
mvp:"8"
},


taiqz:{
name:"Taiqz",
role:"PLAYER",
info:"Fast Rocket League player with strong mechanics and competitive mindset.",
wins:"7",
goals:"60",
mvp:"5"
},


vexy:{
name:"Real Vexy",
role:"PLAYER",
info:"KEZEA player focused on improvement, teamwork and victory.",
wins:"5",
goals:"45",
mvp:"3"
}


};



function openPlayer(player){


let data = players[player];


document.getElementById("popup-name").innerHTML=data.name;

document.getElementById("popup-role").innerHTML=data.role;

document.getElementById("popup-info").innerHTML=data.info;


document.getElementById("popup-wins").innerHTML=data.wins;

document.getElementById("popup-goals").innerHTML=data.goals;

document.getElementById("popup-mvp").innerHTML=data.mvp;


document.getElementById("player-popup").style.display="flex";


}



function closePlayer(){


document.getElementById("player-popup").style.display="none";


}


</script>
