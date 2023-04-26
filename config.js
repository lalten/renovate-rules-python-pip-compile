module.exports = {
    username: 'renovate',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    repositories: ['lalten/renovate-rules-python-pip-compile'],
    onboarding: {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        extends: ["config:base"]
    },
    allowedPostUpgradeCommands: ['^bazel run //:requirements.update$'],
};
