package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_module")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_binary")

sass_binary(
    name = "app-styles",
    src = "app.component.scss",
)

ng_module(
  name = "app",
  srcs = glob(["*.ts"]),
  # assets = [":app-styles.css"],
  tsconfig = "//src:tsconfig.bazel.server.json",
)
