$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

Write-Host "🔄 Auto-sync iniciado en: $repoPath"
Write-Host "Presiona CTRL + C para detener..."
Write-Host ""

while ($true) {

    # Detectar cambios:
    $changes = git status --porcelain

    if ($changes) {
        Write-Host "📌 Cambios detectados. Subiendo..."

        git add .
        git commit -m "Auto-sync: actualización automática"
        git push

        Write-Host "✔ Cambios sincronizados."
        Write-Host ""
    }

    Start-Sleep -Seconds 3
}