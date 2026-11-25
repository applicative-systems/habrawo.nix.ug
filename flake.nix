{
  description = "Nix Usergroup Hannover-Braunschweig-Wolfsburg Website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = inputs: {
    overlays.default = import ./overlay.nix;

    packages = builtins.mapAttrs (
      system: pkgs':
      let
        pkgs = pkgs'.extend inputs.self.overlays.default;
      in
      {
        website = pkgs.habrawo-root;
        default = inputs.self.packages.${system}.website;
      }
    ) inputs.nixpkgs.legacyPackages;

    devShells = builtins.mapAttrs (system: pkgs: {
      default = pkgs.mkShell {
        inputsFrom = [ inputs.self.packages.${system}.default ];

        packages = [
          pkgs.nodejs
          inputs.self.formatter.${system}
        ];
      };
    }) inputs.nixpkgs.legacyPackages;

    formatter = builtins.mapAttrs (
      _: pkgs:
      pkgs.treefmt.withConfig {
        settings = {
          tree-root-file = "flake.nix";
          on-unmatched = "info";
          formatter = {
            nixfmt = {
              command = pkgs.lib.getExe pkgs.nixfmt;
              includes = [ "*.nix" ];
            };
            statix = {
              command = pkgs.lib.getExe pkgs.statix;
              options = [ "fix" ];
              no-positional-arg-support = true;
              includes = [ "*.nix" ];
            };
            deadnix = {
              command = pkgs.lib.getExe pkgs.deadnix;
              options = [ "--edit" ];
              includes = [ "*.nix" ];
            };
            prettier = {
              command = pkgs.lib.getExe pkgs.prettier;
              options = [ "--write" ];
              includes = [
                "*.css"
                "*.html"
                "*.js"
                "*.mjs"
                "*.ts"
                "*.json"
                "*.md"
                "*.yaml"
                "*.yml"
              ];
              excludes = [ "package-lock.json" ];
            };
            shfmt = {
              command = pkgs.lib.getExe pkgs.shfmt;
              options = [
                "-w"
                "-i"
                "2"
                "-s"
              ];
              includes = [
                "*.sh"
                "*.bash"
                "*.envrc"
                "*.envrc.*"
              ];
            };
          };
        };
      }
    ) inputs.nixpkgs.legacyPackages;

    checks = builtins.mapAttrs (system: _: {
      inherit (inputs.self.packages.${system}) website;
      formatting = inputs.self.formatter.${system}.check inputs.self;
    }) inputs.nixpkgs.legacyPackages;
  };
}
