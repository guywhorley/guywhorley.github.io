@echo off
cls
echo -------------------------------------------------------------------------
echo  WATCHING SASS STYLESHEETS IN DIRECTORY
echo  %CD%
echo -------------------------------------------------------------------------
sass --watch ./scss/styles.scss:styles.css
