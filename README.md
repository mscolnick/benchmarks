# Benchmarking toolset

```
[Array#slice x 1]: avg time 0.25621700286865234
[Array#slice x 10]: avg time 0.03896540701389313
[Array#slice x 100]: avg time 0.019470300674438477
[Array#slice x 1000]: avg time 0.011888812214136124
[Array#from + Map#values x 1]: avg time 0.16911500692367554
[Array#from + Map#values x 10]: avg time 0.002597507834434509
[Array#from + Map#values x 100]: avg time 0.001498718559741974
[Array#from + Map#values x 1000]: avg time 0.0016447401642799377
```

### NPM scripts

- `npm run brenchmark`: Run benchmarks
- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
