# Serverless OpenWhisk Typescript Template

Hello! 😎

This is a template Node.js service for the OpenWhisk platform. Before you can deploy your service, please follow the instructions below…

### Setting up a local cluster

#### Downloading and setting up minikube

First of all, download and install minikube following the instructions of the [oficial repository](https://github.com/kubernetes/minikube#installation) depending on your OS, and install the proper [requirements](https://github.com/kubernetes/minikube#requirements), personally I'm using minikube and kubernetes 1.9.0 on Windows 10 with Hyper-V, using the recommended number of cpus and memory by the [OpenWhisk team](https://github.com/apache/incubator-openwhisk-deploy-kube/blob/master/docs/setting_up_minikube/README.md):

```
λ  minikube start --vm-driver=hyperv --hyperv-virtual-switch="Primary Virtual Switch" --cpus 2 --memory 4096
```

# [Note]

# Before executing the upper command you have to configure a [virtual switch](https://docs.docker.com/machine/drivers/hyper-v/#2-set-up-a-new-external-network-switch-optional) in the Hyper-V manager, in order to grant minikube access to internet.

# [Important]

# If you are using minikube in windows with the hyper-v drive, you have to use minikube through an admin powershell, because this is necessary to interact with the hyper-v machine.

# [Curiosity]

# You can connect to the minikube VM with the user 'docker' and the password 'tcuser'.

####Deploying OpenWhisk

Once you have the minikube running in your local machine you only have to clone [this repository](https://github.com/apache/incubator-openwhisk-deploy-kube) and follow the instructions in order to deploy OpenWhisk on it, but if you are working on windows you have to keep in mind some considerations:

* The repository specified principally make use of unix commands, so be careful if you aren't executing these commands in a bash console ([see](https://github.com/apache/incubator-openwhisk-deploy-kube/issues/161#issuecomment-371554041)).
* In windows the end of line ([EOL](https://en.wikipedia.org/wiki/Newline)) differs from Unix-like systems (CRLF vs LF), so it's worth to check the EOL configuration of the both auth files in [this step](https://github.com/apache/incubator-openwhisk-deploy-kube/tree/master/kubernetes/cluster-setup#create-authorization-secrets), these files have to be in LF, bacause, in the contrary, some steps after will fail because the carriage return (/r), will be taken as part of the authetification string.

### Setup the provider plugin

Using the framework with the OpenWhisk platform needs you to install the provider plugin and link this to your service.

#### Install the provider plugin

```
$ npm install --global serverless-openwhisk
```

_Due to an [outstanding issue](https://github.com/serverless/serverless/issues/2895) with provider plugins, the [OpenWhisk provider](https://github.com/serverless/serverless-openwhisk) must be installed as a global module._

#### Link provider plugin to service directory

Using `npm link` will import the provider plugin into the service directory. Running `npm install` will automatically perform this using a `post install` script.

```
$ npm link serverless-openwhisk
or
$ npm install
```

**_…and that's it!_**

### Deploy Service

Use the `serverless` command to deploy your service. The sample `handler.js` file can be deployed without modification.

```shell
serverless deploy
```

### Issues encountered
