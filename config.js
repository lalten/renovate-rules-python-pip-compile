module.exports = {
    username: 'renovate',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    repositories: ['lalten/renovate-rules-python-pip-compile'],
    allowedPostUpgradeCommands: ['^bazel run //:requirements.update$'],
};
