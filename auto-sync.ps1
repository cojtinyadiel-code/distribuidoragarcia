Write-Host "Auto Sync Git iniciado. Detectando cambios..."

$repo = (Get-Location

# Hash previo del último commit
$lastHash = git rev-parse HEAD

while ($true) {
    # Si hay cambios reales en el repositorio
    $status = git status --porcelain

    if ($status) {
        Write-Host "`nCambios detectados. Subiendo a GitHub..."

        git add .

        git commit -m "Auto-commit"

        git push

        Write-Host "Cambios subidos correctamente."

        # Actualizar hash
        $lastHash = git rev-parse HEAD
    }

    Start-Sleep -Seconds 3  # Tiempo entre verificaciones
}