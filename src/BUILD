package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_module")

ng_module(
  name = "src",
  srcs = glob(["*.ts"]),
  deps = ["//src/app"],
  tsconfig = ":tsconfig.bazel.server.json",
)
