let pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  nativeBuildInputs = (with pkgs; [ 
    nodejs-17_x
  ]);
}