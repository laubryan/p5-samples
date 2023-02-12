# p5-samples
Some p5 samples and examples that I've written for fun and learning purposes.

If you use the code in your projects I'd appreciate a mention, but use at your own risk!

## Infinite Tunnel

A test of an idea I had for drawing a pseudo-3d infinite tunnel using only 2d rectangles. 
The illusion is enhanced by having simulated particles fly out of the tunnel towards the viewer.

![Infinite Tunnel](https://github.com/laubryan/p5-samples/blob/b75b0f97b2772d8c06c7ed21607c4c00505e7b9f/infinite-tunnel/infinite-tunnel.gif?raw=true)

## Interactive Bezier Curve

An implementation of a cubic bezier curve with four control points that can be moved around.

Yes, I know that p5 has its own bezier curve function, but this was an interesting exercise that I couldn't pass up.

![Interactive Bezier Curve](https://github.com/laubryan/p5-samples/blob/b75b0f97b2772d8c06c7ed21607c4c00505e7b9f/interactive-bezier-curve/interactive-bezier-curve.gif?raw=true)

## Texture Drawing Benchmark

This is a speed comparison of two drawing functions that each draw an image of TV static. The first uses standard p5 rect() calls, and the second copies random sections from a pre-generated texture. The results are visually indistinguishable, but on my system at least the texture drawing function is about 14x faster. Obviously there's a lot more setup involved with the texture method, and it won't be a good fit for every situation.

![Texture Drawing Benchmark](https://github.com/laubryan/p5-samples/blob/b75b0f97b2772d8c06c7ed21607c4c00505e7b9f/texture-drawing-benchmark/texture-drawing-benchmark.gif?raw=true)
