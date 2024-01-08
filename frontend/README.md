# Placement-app


### To run c# in vs code:
- dotnet new console -o <name>
- cd <name>
- dotnet run

(or)

- create a <name> folder
- create a <name>.csproj
- add this content inside
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net7.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

</Project>
- dotnet run
