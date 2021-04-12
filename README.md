# Snowpack & Tailwind CSS template
create-react-app template for snowpack & tailwindcss
+ serviceWorker for `PWA`, `react router` and `eslint & prettier` for style/linting

## Usage
```shell
npx create-react-app --template snowpack-tailwind
```
Or
```shell
yarn create react-app --template snowpack-tailwind
```

## Scripts

- `yarn start` - Runs the app in the development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.   

- `yarn build` - Builds the app for production to the `build` folder.    

- `yarn tailwind-build` - Builds and minifies the `src/tailwind.css` file to `public/index.min.css`.   

- `yarn minify` - Minifies the `public/index.css` file to `public/index.min.css`.   

- `yarn format` - Formats your code using prettier.   

## Configuration

- Eslint - edit `.eslintrc.json` to change linting rules.

- Prettier - edit `.prettierrc` to change code style.

- Tailwind CSS - edit `tailwind.config.js` and `postcss.config.js` to change plugin & build settings.

- Snowpack - edit `snowpack.config.js` to change plugin & mount settings.