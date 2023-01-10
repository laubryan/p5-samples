# p5-samples
Some p5 samples and examples that I've written for fun and learning purposes. Use at your own risk!

## Infinite Tunnel

A test of an idea I had for drawing a pseudo-3d infinite tunnel using only 2d rectangles. 
The illusion is enhanced by having simulated particles fly out of the tunnel towards the viewer.

![Infinite Tunnel](https://github.com/laubryan/p5-samples/blob/914f01cb9dd3cbe62748894779f0e2dfd2729453/infinite-tunnel/infinite-tunnel.jpg?raw=true)

## Texture Drawing Benchmark

This is a speed comparison of two drawing functions that each draw an image of TV static. The first uses standard p5 rect() calls, and the second copies random sections from a pre-generated texture. The results are visually indistinguishable, but on my system at least the texture drawing function is about 14x faster. Obviously there's a lot more setup involved with the texture method, and it won't be a good fit for every situation.

![Texture Drawing Benchmark](https://github.com/laubryan/p5-samples/blob/d84ce77e336fe57ff2d4e48097ca135f72c68912/texture-drawing-benchmark/texture-drawing-benchmark.jpg?raw=true)
