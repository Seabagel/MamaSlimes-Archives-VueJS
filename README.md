# archiveslimes

https://lemon-wave-09f70830f.azurestaticapps.net/

## Prerequisites

- Install Node.js
- After node is installed, globally install the `Vue CLI`,
- Then, create the project with the `vue create` command
- The project will be created inside another folder in your root directory, you'll have to move it to your root folder after it's created

```
  npm i -g @vue/cli (Need sudo on Linux/Mac)
  vue create {Your project's name}
  select Vue 3.x
  Manually configure it, disable the linter
```

- Launch the vue App in a local server

```
npm run serve
```

## Deployment

- Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
- Run `npm run build` to build your app into a static web app
  - All your Vue files will be compiled and minified into `/dist`. It needs to run on a web server to work
  - To run a production Vue App locally, Install `serve` globally on npm

```
npm run build
npm install -g serve
cd dist
serve
```

- Use a terminal and CD to the `/dist`, and simply run `serve` on your terminal
- If you just open the `index.html` without using a server, your console log will output `failed-to-load-resource-the-server-responded-with-a-status-of-404-not-found`

## Launch with Azure Functions API 
- [Followed this guide](https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vue) to figure out how to add Functions that work together with a Static Web App in a single repository
    - The payload from the Functions server needs to be formatted like `context.res.json(payload);`
    - On the receiving Front End, need to use await `fetch(...).json().then(...)` to catch the payload
- Prerequisites: (Need sudo on Linux/Mac)
  - npm install -g @azure/static-web-apps-cli
  - npm install -g @azure/functions (For typescript only)
  - npm install -g azure-functions-core-tools@3
  - npm install node-fetch@2.0
    - need to use an older node-fetch because of Node v14 ([node-fetch website](https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/))
  - Build project with `npm run build`
  - Start the Function and the built website together (Starts 2 separate IP hosts) `npm run api` 

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
