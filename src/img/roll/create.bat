@Echo Off
For /F "usebackq delims=" %%D In ("dirs.txt") Do (MD "%%D")
pause