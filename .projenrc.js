const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ken',
  authorAddress: 'ken@hiii.com.tw',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'hiii-aws-cdk-utils',
  repositoryUrl: 'https://github.com/hiiiwebadmin/hiii-aws-cdk-utils.git',
  description: 'Aws CDK Construct Util Designed For Hiii.',
  deps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-cloudformation',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecr',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-efs',
    '@aws-cdk/aws-logs',
  ],
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-cloudformation',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecr',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-efs',
    '@aws-cdk/aws-logs',
  ],
  // workflowContainerImage: 'jsii/superchain:1-buster-slim',
  // release : true,
  keywords: [
    'cdk',
    'hiii',
  ],
  // cdkDependencies: undefined,      /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'dependabot.yml', 'website/public'];
project.npmignore.exclude(...common_exclude, 'images', 'docs', 'website');
project.gitignore.exclude(...common_exclude);
project.synth();