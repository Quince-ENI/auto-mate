using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QA_back.Migrations
{
    /// <inheritdoc />
    public partial class site : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "idSite",
                table: "car",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_car_idSite",
                table: "car",
                column: "idSite");

            migrationBuilder.AddForeignKey(
                name: "FK_car_site_idSite",
                table: "car",
                column: "idSite",
                principalTable: "site",
                principalColumn: "idSite",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_car_site_idSite",
                table: "car");

            migrationBuilder.DropIndex(
                name: "IX_car_idSite",
                table: "car");

            migrationBuilder.DropColumn(
                name: "idSite",
                table: "car");
        }
    }
}
