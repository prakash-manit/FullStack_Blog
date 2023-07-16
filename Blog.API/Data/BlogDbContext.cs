using Blog.API.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Data
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Post> Posts { get; set; }

    }
}
