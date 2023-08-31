﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QA_back;

#nullable disable

namespace QA_back.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20230831093428_Migration_Car")]
    partial class Migration_Car
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("QA_back.Models.Car", b =>
                {
                    b.Property<int>("idCar")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Couleur")
                        .HasColumnType("longtext");

                    b.Property<int>("Disponibilité")
                        .HasColumnType("int");

                    b.Property<string>("Immatriculation")
                        .HasColumnType("longtext");

                    b.Property<string>("Marque")
                        .HasColumnType("longtext");

                    b.Property<string>("Modele")
                        .HasColumnType("longtext");

                    b.Property<int>("Nb_Km")
                        .HasColumnType("int")
                        .HasColumnName("Nombre de Km");

                    b.Property<int>("Nb_Portes")
                        .HasColumnType("int")
                        .HasColumnName("Nombre de Portes");

                    b.Property<string>("Type")
                        .HasColumnType("longtext");

                    b.Property<int>("key")
                        .HasColumnType("int");

                    b.HasKey("idCar");

                    b.ToTable("Car");
                });

            modelBuilder.Entity("QA_back.Models.Key", b =>
                {
                    b.Property<int>("idKey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("available")
                        .HasColumnType("int");

                    b.Property<string>("location")
                        .HasColumnType("longtext");

                    b.HasKey("idKey");

                    b.ToTable("Key");
                });

            modelBuilder.Entity("QA_back.Models.Site", b =>
                {
                    b.Property<int>("idSite")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("address")
                        .HasColumnType("longtext");

                    b.Property<string>("city")
                        .HasColumnType("longtext");

                    b.Property<int>("departement")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .HasColumnType("longtext");

                    b.Property<int>("postal_code")
                        .HasColumnType("int");

                    b.HasKey("idSite");

                    b.ToTable("Site");
                });

            modelBuilder.Entity("QA_back.Models.Travel", b =>
                {
                    b.Property<int>("idRoute")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("arrival_city")
                        .HasColumnType("longtext");

                    b.Property<DateTime>("arrival_time")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("car")
                        .HasColumnType("int");

                    b.Property<int>("carpooling")
                        .HasColumnType("int");

                    b.Property<string>("departure_city")
                        .HasColumnType("longtext");

                    b.Property<DateTime>("departure_time")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("remaining_seats")
                        .HasColumnType("int");

                    b.Property<int>("user")
                        .HasColumnType("int");

                    b.HasKey("idRoute");

                    b.ToTable("Travel");
                });

            modelBuilder.Entity("QA_back.Models.User", b =>
                {
                    b.Property<int>("registration_number")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("first_name")
                        .HasColumnType("longtext");

                    b.Property<string>("mail")
                        .HasColumnType("longtext");

                    b.Property<string>("name")
                        .HasColumnType("longtext");

                    b.Property<string>("password")
                        .HasColumnType("longtext");

                    b.Property<string>("role")
                        .HasColumnType("longtext");

                    b.Property<string>("tel")
                        .HasColumnType("longtext");

                    b.HasKey("registration_number");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
