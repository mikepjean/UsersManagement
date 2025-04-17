using Microsoft.EntityFrameworkCore;

namespace UsersManagement.Models
{
    public class UserDetailContext: DbContext
    {
        public UserDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; } = null!;
    }
}
