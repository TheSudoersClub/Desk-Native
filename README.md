<h1 align="center">Desk-Native</h1>

<p align="center">
  <img src="template/src/client/assets/logo2.svg" alt="Desk-Native logo" width="120px" height="120px"/>
  <br>
  <i>
    A Build Tool for Creating Full-Stack Native Desktop Applications for Linux, Mac and Windows <br> with Web Technologies.
  </i>
  <br>
</p>

<p align="center">
  <a href="https://thesudoersclub.github.io/projects/desk-native"><strong>Desk Native</strong></a>
  <br>
</p>

<p align="center">
  <a href="https://thesudoersclub.github.io/projects/desk-native/docs/contribute">Contribute</a>
  ·
  <a href="https://github.com/TheSudoersClub/Desk-Native/issues">Submit an Issue</a>
  ·
  <a href="https://thesudoersclub.github.io/projects/desk-native/docs">Documentation</a>
  <br>
  <br>
</p>

> tbh it just scaffolds an express electron app but is way simple and minimal, We don't know if it would be useful or not but we find ourselves repeating so here we go. <br>
> And one thing to mention, it compiles in a build so no need for node on the user side.

<hr>

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Setting Up a Project

Create workspace:

```
npm create desk-native-app <app_name>
```
or
```
npx create-desk-native-app <app_name>
```

Run the application:

```
cd <app_name>
npm run dev
```

Compile application for native platforms:

```
npm run build
```
<br>

**Like Desk-Native? Give our repo a star**

<!-- var  -->
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/get-npm
