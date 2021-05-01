class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(380, 100);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(380, 300);
    button.position(500, 400);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
      var greeting = createElement('h1');
      greeting.html("Konichiwa, " + name + " ,Boku no Midoriya Izuku " )
      greeting.position(380, 300)
    });

  }
}
