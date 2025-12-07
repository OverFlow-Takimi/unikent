using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Unikent.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GPopulation = table.Column<float>(type: "real", nullable: false),
                    SPopulation = table.Column<float>(type: "real", nullable: false),
                    MonthCost = table.Column<float>(type: "real", nullable: false),
                    DormitoryPrices = table.Column<float>(type: "real", nullable: false),
                    RentPrices = table.Column<float>(type: "real", nullable: false),
                    SecurityIndexs = table.Column<float>(type: "real", nullable: false),
                    OffenceInddex = table.Column<float>(type: "real", nullable: false),
                    NearCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SocialScore = table.Column<float>(type: "real", nullable: false),
                    NightLife = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NigtLifeStart = table.Column<TimeSpan>(type: "time", nullable: false),
                    NightLifeEnd = table.Column<TimeSpan>(type: "time", nullable: false),
                    Weaather = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Density = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Transpor = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MSurname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nickname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsPremium = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    RId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GPopulation = table.Column<float>(type: "real", nullable: false),
                    SPopulation = table.Column<float>(type: "real", nullable: false),
                    MonthlyIncome = table.Column<float>(type: "real", nullable: false),
                    ImportanceCost = table.Column<int>(type: "int", nullable: false),
                    ImportanceSafety = table.Column<int>(type: "int", nullable: false),
                    ImportanceSocial = table.Column<int>(type: "int", nullable: false),
                    WantsNightLife = table.Column<bool>(type: "bit", nullable: false),
                    PrefersHotClimate = table.Column<bool>(type: "bit", nullable: false),
                    WantsNatureLifestyle = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.RId);
                });

            migrationBuilder.CreateTable(
                name: "Results",
                columns: table => new
                {
                    ResultId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Score = table.Column<double>(type: "float", nullable: false),
                    CityId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Results", x => x.ResultId);
                    table.ForeignKey(
                        name: "FK_Results_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Results_CityId",
                table: "Results",
                column: "CityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");

            migrationBuilder.DropTable(
                name: "Requests");

            migrationBuilder.DropTable(
                name: "Results");

            migrationBuilder.DropTable(
                name: "Cities");
        }
    }
}
