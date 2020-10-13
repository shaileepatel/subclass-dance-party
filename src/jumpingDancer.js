var JumpingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('jump').prepend('<img width = 94 src="https://i.postimg.cc/hGGg39PZ/albie.png" alt="" />');
  this.$node.mouseover(function() {
    $(this).find('img').toggleClass('zoom');
  });
  this.step();
};

JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};