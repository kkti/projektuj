$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$referenceDir = Join-Path $root "public\reference"
$targetWidth = 960
$targetHeight = 540

$files = @(
  "IM000908.JPG",
  "2014-01-10 13.53.30.jpg",
  "20231031_122650.jpg",
  "Plosina-Spolana-Neratovice.png",
  "Napojeni-ricni-vody-Synthos.png",
  "Pozarni-Zebrik-Bidfood.png"
)

function Get-JpegEncoder {
  [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" } |
    Select-Object -First 1
}

function Save-Jpeg($bitmap, $destinationPath, $quality = 90L) {
  $encoder = Get-JpegEncoder
  $parameters = New-Object System.Drawing.Imaging.EncoderParameters 1
  $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $quality)
  $bitmap.Save($destinationPath, $encoder, $parameters)
  $parameters.Dispose()
}

foreach ($file in $files) {
  $sourcePath = Join-Path $referenceDir $file
  $source = [System.Drawing.Bitmap]::new($sourcePath)

  try {
    $sourceRatio = $source.Width / $source.Height
    $targetRatio = $targetWidth / $targetHeight

    if ($sourceRatio -gt $targetRatio) {
      $cropHeight = $source.Height
      $cropWidth = [int][Math]::Round($cropHeight * $targetRatio)
      $cropX = [int][Math]::Round(($source.Width - $cropWidth) / 2)
      $cropY = 0
    }
    else {
      $cropWidth = $source.Width
      $cropHeight = [int][Math]::Round($cropWidth / $targetRatio)
      $cropX = 0
      $cropY = [int][Math]::Round(($source.Height - $cropHeight) / 2)
    }

    $target = [System.Drawing.Bitmap]::new($targetWidth, $targetHeight)

    try {
      $graphics = [System.Drawing.Graphics]::FromImage($target)

      try {
        $graphics.Clear([System.Drawing.Color]::White)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $destinationRect = [System.Drawing.Rectangle]::new(0, 0, $targetWidth, $targetHeight)
        $sourceRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropWidth, $cropHeight)
        $graphics.DrawImage($source, $destinationRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
      }
      finally {
        $graphics.Dispose()
      }

      $extension = [System.IO.Path]::GetExtension($file)
      $name = [System.IO.Path]::GetFileNameWithoutExtension($file)
      $destinationPath = Join-Path $referenceDir ("{0}-card{1}" -f $name, $extension.ToLowerInvariant())

      if ($extension -match "\.jpe?g") {
        Save-Jpeg $target $destinationPath
      }
      else {
        $target.Save($destinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
      }

      Write-Host ("Created {0}" -f $destinationPath)
    }
    finally {
      $target.Dispose()
    }
  }
  finally {
    $source.Dispose()
  }
}
