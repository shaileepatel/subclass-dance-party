describe('FlyingDancer', function() {

  var FlyingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    FlyingDancer = new FlyingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(FlyingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(FlyingDancer.$node, 'toggle');
    FlyingDancer.step();
    expect(FlyingDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(FlyingDancer, 'step');
      expect(FlyingDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(FlyingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(FlyingDancer.step.callCount).to.be.equal(2);
    });
  });
});