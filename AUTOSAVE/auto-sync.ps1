# RUTA DEL REPO
$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path

# Cambiar a la carpeta del repo
Set-Location $repoPath

Write-Host "Auto-sync iniciado en: $repoPath"
Write-Host "Presiona CTRL + C para detenerlo..."
Write-Host ""

while ($true) {

    # Detectar cambios sin commit
    $changes = git status --porcelain

    if ($changes) {
        Write-Host "➜ Cambios detectados. Subiendo..."

        git add .
        git commit -m "Auto-sync: actualización automática"
        git push

        Write-Host "✔ Cambios sincronizados."
        Write-Host ""
    }

    Start-Sleep -Seconds 3
}