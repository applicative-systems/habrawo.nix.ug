{
  description = "Nix Usergroup Hannover-Braunschweig-Wolfsburg Website";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = inputs: inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = [
            pkgs.nodejs
          ];
        };

        packages = {
          website = pkgs.callPackage ./website.nix {};
          default = config.packages.website;
        };

        checks = config.packages;
      };
      flake.overlays.default = import ./overlay.nix;
    };
}
