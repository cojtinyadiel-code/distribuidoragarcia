# AUTO-SYNC GIT AUTOMÁTICO POR INTERVALO

# Ruta de tu proyecto
$repoPath = "C:\Users\HP\Documents\Personal Projects\Proyect-ProgramationWEB\WEB"

# Intervalo de revisión en segundos
$intervalSeconds = 30

# Ir a la carpeta del repositorio
Set-Location $repoPath

Write-Host "Auto-sync iniciado. Se revisarán cambios cada $intervalSeconds segundos."
Write-Host "Presiona CTRL + C para detenerlo."
Write-Host ""

while ($true) {

    # Revisar cambios pendientes
    $status = git status --porcelain

    if ($status) {
        Write-Host "Cambios detectados. Subiendo..."

        git add .
        git commit -m "Auto-sync: actualización automática"
        git push

        Write-Host "Cambios sincronizados."
        Write-Host ""
    }
    else {
        Write-Host "No hay cambios por guardar."
        Write-Host ""
    }

    Start-Sleep -Seconds $intervalSeconds
}
