const { FuseBox, BabelPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  plugins: [BabelPlugin()]
});

fuse.bundle("A-bundle").instructions("> A.js");
fuse.bundle("B-bundle").instructions("> B.ts");

fuse.run();
