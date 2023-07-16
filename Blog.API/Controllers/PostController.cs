using Blog.API.Data;
using Blog.API.Data.Entity;
using Blog.API.Data.Model;
using Blog.API.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly BlogDbContext dbContext;

        public PostController(BlogDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await dbContext.Posts.ToListAsync();
            return Ok(posts);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetPostById(Guid id)
        {
            var post = await dbContext.Posts.FirstOrDefaultAsync(x=>x.Id == id);
            
            return post!= null? Ok(post): NotFound(ConstantVar.NotFound);
        }

        [HttpPost]
        public async Task<IActionResult> AddPost (AddPostRequest addPostModel)
        {
            //Convert Model to Entity
            var post = new Post()
            {
                Title = addPostModel.Title,
                Content = addPostModel.Content,
                Summary = addPostModel.Summary,
                UrlHandle = addPostModel.UrlHandle,
                FeaturedImageUrl = addPostModel.FeaturedImageUrl,
                IsVisible = addPostModel.IsVisible,
                AuthorName = addPostModel.AuthorName,
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow  //While adding blog, both dates shall be same.
            };
            
            post.Id = Guid.NewGuid();
            dbContext.Posts.Add(post);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(AddPost), post);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdatePost (Guid id, UpdatePostRequest updatePostModel)
        {
            //Check if id exists in the DB
            var existingPost = await dbContext.Posts.FindAsync(id);

            if (existingPost != null)
            {
                //Convert Model to Entity
                existingPost.Title = updatePostModel.Title;
                existingPost.Content = updatePostModel.Content;
                existingPost.Summary = updatePostModel.Summary;
                existingPost.UrlHandle = updatePostModel.UrlHandle;
                existingPost.FeaturedImageUrl = updatePostModel.FeaturedImageUrl;
                existingPost.IsVisible = updatePostModel.IsVisible;
                existingPost.UpdatedDate = updatePostModel.UpdatedDate;

                await dbContext.SaveChangesAsync();
                return Ok(existingPost);
            }

            return NotFound(ConstantVar.NotFound);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            //Check if id exists in the DB
            var existingPost = await dbContext.Posts.FindAsync(id);
            if (existingPost != null)
            {
                dbContext.Posts.Remove(existingPost);
                await dbContext.SaveChangesAsync();
                return Ok(existingPost);
            }

            return NotFound(ConstantVar.NotFound);
        }
    }
}
