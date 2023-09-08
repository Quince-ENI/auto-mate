using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace QA_back.Models;

[Table("travel_user")]
public class TravelUser
    {
        [Key]
        public int id { get; set;}
        public int idRoute { get; set; }
        public int registration_number { get; set; }
        [JsonIgnore]
        [ForeignKey("idRoute")]
        public Travel Travel { get; set; }
        [JsonIgnore]
        [ForeignKey("registration_number")]
        public User User { get; set; }
    }
