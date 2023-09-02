using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QA_back.Migrations
{
    /// <inheritdoc />
    public partial class Travel_Car_Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "travel",
                table: "travel",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_travel_travel",
                table: "travel",
                column: "travel");

            migrationBuilder.AddForeignKey(
                name: "FK_travel_car_travel",
                table: "travel",
                column: "travel",
                principalTable: "car",
                principalColumn: "idCar",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_travel_car_travel",
                table: "travel");

            migrationBuilder.DropIndex(
                name: "IX_travel_travel",
                table: "travel");

            migrationBuilder.DropColumn(
                name: "travel",
                table: "travel");
        }
    }
}
