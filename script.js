const players = {

    Zyvix:{
        role:"CAPTAIN",
        img:"logo.png",
        wins:"12",
        goals:"85",
        mvp:"8",
        bio:"Team captain of KEZEA Esports. Competitive Rocket League player."
    },

    Taiqz:{
        role:"PLAYER",
        img:"logo.png",
        wins:"7",
        goals:"60",
        mvp:"5",
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

    let p = players[name];

    document.getElementById("playerModal").style.display="flex";

    document.getElementById("profileName").innerHTML = name;

    document.getElementById("profileRole").innerHTML = p.role;

    document.getElementById("profileImg").src = p.img;

    document.getElementById("wins").innerHTML = p.wins;

    document.getElementById("goals").innerHTML = p.goals;

    document.getElementById("mvp").innerHTML = p.mvp;

    document.getElementById("profileBio").innerHTML = p.bio;

}



function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}
