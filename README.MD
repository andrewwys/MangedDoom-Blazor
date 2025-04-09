# Managed doom Blazor

- [Demo](https://yostane.github.io/MangedDoom-Blazor/)
- [Presentation slides](https://yostane.github.io/MangedDoom-Blazor/slides)

![Logo](./media/logo.jpg)

This is a port of [Managed Doom version 1](https://github.com/sinshu/managed-doom) to the browser

## Running the webapp locally

```sh
#prerequisites
dotnet workload install wasm-tools wasm-experimental
dotnet tool install -g dotnet-serve
```

```sh
dotnet publish -c Release BlazorDoom.csproj && dotnet serve -d:bin/Release/net9.0/publish/wwwroot -p 8080 -S --path-base '/MangedDoom-Blazor'
```

- Then, open this link in your browser: [http://localhost:8080/MangedDoom-Blazor/](http://localhost:8080/MangedDoom-Blazor/)

## TODO

- Implement mouse controls
- Implement save and load

## Userful scripts

```pwsh
# List all relative files (for pwa)
Get-ChildItem -Recurse  -File -Name | % { '"./' + ($_ -replace '[\\/]', '/') + '",' }
Get-ChildItem -Recurse  -File -Name -Exclude *.br,*.gz  | % { '"./' + ($_ -replace '[\\/]', '/') + '",' }

dotnet tool install --global dotnet-serve
```

## Credits

- [html5-virtual-game-controller](https://github.com/austinhallock/html5-virtual-game-controller)
