{ buildNpmPackage, nodejs, lib }:

buildNpmPackage {
  name = "habrawo.nix.ug-website";
  nativeBuildInputs = [ nodejs ];

  src = lib.fileset.toSource {
    root = ./.;
    fileset = lib.fileset.unions [
      ./astro.config.mjs
      ./package-lock.json
      ./package.json
      ./src
      ./tailwind.config.mjs
      ./tsconfig.json
      (lib.fileset.maybeMissing ./public)
    ];
  };

  installPhase = ''
    runHook preInstall
    cp -pr --reflink=auto dist $out/
    runHook postInstall
  '';

  npmDepsHash = "sha256-Fw6zr6oD+eYZuhwlCSNjNmwh+/En27e4G3P1imcu4xE=";
}
