@REM Deletes and edits some old files
rmdir /s/q "export/assets"
del "build.js" /f /s
del "export\index.html"

@REM copy from project to export folder
xcopy /I /Y /E "./assets" "./export/assets" 
robocopy "./" "./export" index.html

@REM bundles the game 
.\node_modules\.bin\esbuild code/main.js --bundle --outfile=export/build.js
