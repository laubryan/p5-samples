# p5-samples
Some p5 samples and examples that I've written for fun and learning purposes. Use at your own risk!

## Texture Drawing Benchmark
This is a speed comparison of two drawing functions that each draw an image of TV static. The first uses standard p5 rect() calls, and the second copies random sections from a pre-generated texture. The results are visually indistinguishable, but on my system at least the texture drawing function is about 14x faster.
