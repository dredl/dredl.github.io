import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    files: `${buildFolder}/packages/`,
    fonts: `${buildFolder}/fonts`,
    img: `${buildFolder}/img/`,
    js: `${buildFolder}/js`,

  },
  src: {
    html: `${srcFolder}/*.html`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    scss: `${srcFolder}/packages/Webkul/Velocity/src/Resources/assests/sass/components/UI.scss`,
    files: `${srcFolder}/packages/**/*.*`,
    img: `${srcFolder}/img/**/*.{png,jpeg,jpg,gif,webp}`,
    js: `${srcFolder}/js/**/*.*`,
    svg: `${srcFolder}/img/**/*.svg`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    fonts: `${srcFolder}/fonts`,
    scss: `${srcFolder}/packages/**/*.scss`,
    js: `${srcFolder}/js/**/.js`,
    img: `${srcFolder}/img/**/*.{png,jpeg,jpg,svg,gif,ico,webp}`,
    files: `${srcFolder}/packages/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}