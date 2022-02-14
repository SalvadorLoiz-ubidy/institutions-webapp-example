# institutions-webapp

### Add Keycloak Server to your hosts file

1. Open hosts file of your local workstation with your text editor.
   - For Windows, the hosts file is located at C:\Windows\System32\drivers\etc\hosts
   - For Linux, the hosts file is located at /etc/hosts
   - For Mac OS X, the hosts file is located at /etc/hosts
2. Add a new line and insert the content in your hosts file.

```
192.168.100.138    login.wanpngdev.com
```

### DEVELOPMENT START UP

1. Install dependencies using either of the commands:

```
$ npm install / $ yarn install
```

2. Run development server using either of the commands:

```
$ npm run dev / yarn dev
```

3. Open `http://localhost:3040/` in your browser

4. Please check our [frontend standards and practices](https://github.com/maridinsanmiguel-ubidy/frontend_standards_and_practices)

- Including git flow, naming conventions, folder structure, react & css style guide, and robot support.

### PRODUCTION DEPLOYMENT

1. Create .env file from the root folder with variables:

```
NODE_TLS_REJECT_UNAUTHORIZED=0
RAZZLE_ENV={ENVIRONMENT}
RAZZLE_API_URL={API_URL}

```

Note:

```
// Development environment is the default if you don't specify any below
RAZZLE_API_URL=http://localhost:4020 // local
RAZZLE_API_URL=https://uatapi.wanpng.com // uat
RAZZLE_API_URL=https://api.wanpng.com // production
```

1. Install dependencies using either of the commands:

```
$ npm install / $ yarn install
```

2. Create build files using either of the commands:

```
$ npm run next build / $ yarn next build
```
