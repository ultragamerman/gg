class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.xPosition=0;
    this.place=0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xPosition:this.xPosition
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('Players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
