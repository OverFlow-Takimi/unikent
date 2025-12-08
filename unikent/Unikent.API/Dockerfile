FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["Unikent.API/Unikent.API.csproj", "Unikent.API/"]
RUN dotnet restore "Unikent.API/Unikent.API.csproj"
COPY . .
WORKDIR "/src/Unikent.API"
RUN dotnet build "Unikent.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Unikent.API.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Unikent.API.dll"]
