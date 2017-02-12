'use strict';

const gulp = require('gulp')
const pdf = require('gulp-html-pdf')
const inlineimg = require('gulp-inline-image-html');
const rename = require('gulp-rename');

const pdfOptions = {
    border: {
        top: "20px",
        right: "0",
        left: "0px",
        bottom: "20px"
    },
    width: '8.27in',
    height: '11.7in'
  }

gulp.task('to-pdf').src('index.html')
  .pipe(inlineimg(''))
  .pipe(pdf(pdfOptions))
  .pipe(rename('cv_karandi_tamas.pdf'))
  .pipe(gulp.dest('./'))
