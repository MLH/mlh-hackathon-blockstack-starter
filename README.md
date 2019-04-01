# Introduction

This is a hackathon boilerplate for a new Blockstack = applications created by [Major League Hacking][mlh-github]. It is for hackers looking to get started quickly on a new hackathon project using the Blockstack environment.



- [Installation Guide](#installation-guide) - How to get started with a new Blockstack app
- [User Guide](https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/USER_GUIDE.md) - How to develop apps created with this starter project
- [Contributing Guide](https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONTRIBUTING.md) - How to contribute to the project

# <a name='installation-guide'>Installation Guide</a>

This project requires the following tools:

- Node.js - The JavaScript environment for server-side code.
- NPM - A Node.js package manager used to install dependencies.
- Browserfy - JavaScript tool that allows hackers to write Node.js-style modules that compile for use in the browser.

To get started, install NPM on your local computer if you don't have them already.

## Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/MLH/mlh-hackathon-blockstack-starter.git
$ cd mlh-hackathon-blockstack-starter
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`.

```
$ npm install
```

Now we're ready to start our server which is as simple as:

`$ npm start`

Open http://localhost:5000 to view it in your browser.

The default port for our app is `5000`, but you may need to update this if your setup uses a different port or if you're hosting your app somewhere besides your local machine.

The app will automatically reload if you make changes to the code. You will see the build errors and warnings in the console.

**Step 3. Create Blockstack ID**

Head over to [Blockstack](http://hackp.ac/blockstack-create) and create a new Blockstack. Name it what you like but this will be the ID you will need to publish DApps to Blockstack, and access other DApps!

# Code of Conduct

We enforce a Code of Conduct for all maintainers and contributors of this Guide. Read more in [CONDUCT.md][mlh-conduct].

# License

The Hackathon Starter Kit is open source software [licensed as MIT][mlh-license].

[mlh-github]: https://github.com/jekyll/jekyll/blob/master/CONDUCT.markdown
[mlh-conduct]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONDUCT.md
[mlh-license]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/LICENSE.md
