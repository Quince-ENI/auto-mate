using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QA_back.Migrations
{
    /// <inheritdoc />
    public partial class travel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_travel_car_car1",
                table: "travel");

            migrationBuilder.DropIndex(
                name: "IX_travel_car1",
                table: "travel");

            migrationBuilder.DropColumn(
                name: "car1",
                table: "travel");

            migrationBuilder.RenameColumn(
                name: "car",
                table: "travel",
                newName: "idCar");

            migrationBuilder.CreateIndex(
                name: "IX_travel_idCar",
                table: "travel",
                column: "idCar");

            migrationBuilder.AddForeignKey(
                name: "FK_travel_car_idCar",
                table: "travel",
                column: "idCar",
                principalTable: "car",
                principalColumn: "idCar",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_travel_car_idCar",
                table: "travel");

            migrationBuilder.DropIndex(
                name: "IX_travel_idCar",
                table: "travel");

            migrationBuilder.RenameColumn(
                name: "idCar",
                table: "travel",
                newName: "car");

            migrationBuilder.AddColumn<int>(
                name: "car1",
                table: "travel",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_travel_car1",
                table: "travel",
                column: "car1");

            migrationBuilder.AddForeignKey(
                name: "FK_travel_car_car1",
                table: "travel",
                column: "car1",
                principalTable: "car",
                principalColumn: "idCar",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
