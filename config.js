module.exports = {
    repositories: ['lalten/renovate-rules-python-pip-compile'],
    allowedPostUpgradeCommands: ['^bazel run //:requirements.update$'],
};
