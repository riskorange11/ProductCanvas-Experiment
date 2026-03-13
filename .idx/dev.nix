{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
    "eamodio.gitlens"
    "GitLab.gitlab-workflow"
    "meta.pyrefly"
    "ms-python.debugpy"
    "ms-python.python"
    "redhat.java"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
        manager = "web";
      };
    };
  };
}
