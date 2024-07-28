@echo off
setlocal enabledelayedexpansion

:: Navigate to the directory containing the files (modify as needed)
cd "C:\Path\To\Your\Directory"

:: Loop through each file with -min in the name
for %%f in (*-min*) do (
    set "filename=%%f"
    set "newname=!filename:-min=!"
    ren "%%f" "!newname!"
)

endlocal