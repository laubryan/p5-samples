# p5-samples
Some p5 samples and examples that I've written for fun and learning purposes.

If you use the code in your projects I'd appreciate a mention, but use at your own risk!

## Infinite Tunnel

A test of an idea I had for drawing a pseudo-3d infinite tunnel using only 2d rectangles. 
The illusion is enhanced by having simulated particles fly out of the tunnel towards the viewer.

![Infinite Tunnel](https://github.com/laubryan/p5-samples/blob/914f01cb9dd3cbe62748894779f0e2dfd2729453/infinite-tunnel/infinite-tunnel.jpg?raw=true)

## Interactive Bezier Curve

An implementation of a cubic bezier curve with four control points that can be moved around.

Yes, I know that p5 has its own bezier curve function, but this an interesting exercise that I couldn't pass up.

![Interactive Bezier Curve](https://github.com/laubryan/p5-samples/blob/a5f1f50e3b55b0af12eb48eba285b2ac8cdc44de/interactive-bezier-curve/interactive-bezier-curve.jpg?raw=true)

## Texture Drawing Benchmark

This is a speed comparison of two drawing functions that each draw an image of TV static. The first uses standard p5 rect() calls, and the second copies random sections from a pre-generated texture. The results are visually indistinguishable, but on my system at least the texture drawing function is about 14x faster. Obviously there's a lot more setup involved with the texture method, and it won't be a good fit for every situation.

![Texture Drawing Benchmark](https://github.com/laubryan/p5-samples/blob/d84ce77e336fe57ff2d4e48097ca135f72c68912/texture-drawing-benchmark/texture-drawing-benchmark.jpg?raw=true)
