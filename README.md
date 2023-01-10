# p5-samples
Some p5 samples and examples that I've written for fun and learning purposes. Use at your own risk!

## Infinite Tunnel
A test of an idea I had for drawing a pseudo-3d infinite tunnel using only 2d rectangles. 
The illusion is enhanced by having simulated particles fly out of the tunnel towards the viewer.

## Texture Drawing Benchmark
This is a speed comparison of two drawing functions that each draw an image of TV static. The first uses standard p5 rect() calls, and the second copies random sections from a pre-generated texture. The results are visually indistinguishable, but on my system at least the texture drawing function is about 14x faster. Obviously there's a lot more setup involved with the texture method, and it won't be a good fit for every situation.
