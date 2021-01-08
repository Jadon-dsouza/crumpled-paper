class Box {
    var options = {
        restitution: 1;
    }
    this.body = Bodies.rectangle(200, 100, 50,50, options);
    world.add(world, this.body);
}