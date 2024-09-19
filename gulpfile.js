import {src, dest, watch, series} from 'gulp'
import * as dartsass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartsass)

export function global (done) {
    src('scss/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))


        done()
}


export function index (done) {
    src('scss/pages/styleIndex.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))

        done()
}

export function nosotros (done) {
    src('scss/pages/styleNosotros.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))


        done()
}

export function servicios (done) {
    src('scss/pages/styleServicios.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))


        done()
}

export function trabajos (done) {
    src('scss/pages/styleTrabajos.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))


        done()
}

export function contacto (done) {
    src('scss/pages/styleContacto.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))


        done()
}

export const css = series(global, index, nosotros, servicios, trabajos, contacto);


export function dev(){
    watch('scss/**/*.scss', css)
}


export function build(done) {
    done();
}