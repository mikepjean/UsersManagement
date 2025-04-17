using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UsersManagement.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string firstname { get; set; } = "";
        [Column(TypeName = "nvarchar(100)")]
        public string lastname { get; set; } = "";
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; } = "";
        [Column(TypeName = "nvarchar(10)")]
        public string birthdate { get; set; } = "";
    }
}
