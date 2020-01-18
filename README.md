<img src="https://i.ibb.co/cc7JzNr/logo.png" width="300" height="auto" alt="">

# Front end Starter

[![Bootstrap](https://flat.badgen.net/badge/bootstrap/4.3/7952b3)](https://getbootstrap.com)
[![Slickcarousel](https://flat.badgen.net/badge/slickslider/1.8.1/7952b3)](https://kenwheeler.github.io/slick)
[![Fontawesome](https://flat.badgen.net/badge/fontawsome/5/7952b3)](https://fontawesome.com/)
[![Webpack](https://flat.badgen.net/badge/webpack/4/14aaf3)](https://webpack.js.org)

Kick-start your project with [Bootstrap](https://getbootstrap.com/), the world's most popular framework and modern development workflow.
This boilerplate with [Webpack](https://webpack.js.org/) based setup helps you build web apps and sites much faster.

## Features

- **Live reloading** <br> browser update after changes
- **Automatically optimizes** entry files <br> concatenate, minify and inject output files to HTML
- **[Sass](https://sass-lang.com/) for stylesheets** <br> with [the 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
- **Modern JavaScript** <br> ES6 modules-based code linting by [ESLint](https://eslint.org/)
- Older **browsers support**
  - add vendor prefixes in CSS with [Autoprefixer](https://autoprefixer.github.io/)
  - convert ES6+ code into a backwards compatible with [Babel](https://babeljs.io/)
- Includes:
  - **[Webpack 4](https://webpack.js.org/)** configuration - module bundler
  - **[Bootstrap 4](http://getbootstrap.com/)** - the most popular HTML, CSS and JS framework
  - [jQuery](http://jquery.com/) - JavaScript library
  - [Font Awesome 5](https://fontawesome.com/) - the web's most popular vector icons and social logos
  - [Google Fonts](https://fonts.google.com/) - libre licensed fonts
  - [Slick Slider]() - The web's most popular carousel out there
- sourceMaps
- and more...

## Theme development

[Node.js](http://nodejs.org/) is the only required dependency to work with _Front end starter_.

#### Installation

1. Install [Node.js](http://nodejs.org/) (installation depends on your system). After finishing, you will be able to
   check the version number using `node -v` and `npm -v` commands
   ([npm is distributed with Node.js](https://www.npmjs.com/get-npm)).
2. It is recommended to install the latest version of [Yarn](https://yarnpkg.com/en/docs/install).
3. Clone the repo using `git clone https://github.com/cichy380/html-starter-bs4-webpack.git` or [download _Front end starter Starter_]().
4. Open folder **front-end-starter** (command: `cd front-end-starter`) and install a packages of _HTML Starter_ via command: `yarn` or `npm install`.

Now you have everything you need to run the build process.

#### Build commands

- `bower install slick-animation` - let´s you easy animate your elements which are contained in your Slick.
- `yarn start` or `npm run start` ─ compile assets when file changes are made, start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) session
- `yarn build` or `npm run build` ─ compile and optimize (the files in your src directory) for production

## Structure

Shorten directories and files structure which you'll see after build:

```shell
front-end-starter/
├── src/                 # template assets
│   ├── fonts/              # place template fonts files here
│   ├── html/               # template HTML files
│   │  ├── partials/        # common parts of HTML code
│   │  │  └── [...]
│   │  └── index.html       # default HTML skeleton
│   ├── images/             # template images files
│   │  └── [...]
│   ├── scripts/            # template javascript files
│   │  ├── vendor/          # necessary parts of frameworks and libs
│   │  │  └── [...]         # Bootstrap, FontAwesome, jQuery
│   │  └── main.js          # main javascript file that references JS source files
│   ├── scss/               # template styles
│   │  ├── [...]            # Simple Sass architecture folders
│   │  └── main.scss        # main Sass file that references scss source files
│   ├── index.js            # entry point of template
│   └── [...]               # miscellaneous
├── dist/                   # output folder with production build (don't edit)
│   ├── css/                # output styles
│   ├── images/             # output images
│   ├── js/                 # output javascripts
│   ├── index.html          # homepage
│   └── [...]               # miscellaneous
├── node_modules/           # Node.js packages (don't edit)
│   └── [...]
├── .babelrc                # Babel configuration file
├── .eslintrc.js            # ESLint configuration file
├── package.json            # Node.js dependencies and scripts
├── webpack.config.js       # Webpack configuration file
├── yarn.lock               # Yarn lock file (don't edit)
└── [...]                   # other...
```

## License

Code released under the [MIT license]().
