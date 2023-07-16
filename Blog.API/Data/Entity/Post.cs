namespace Blog.API.Data.Entity
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string? Summary { get; set; }
        public string? UrlHandle { get; set; }
        public string? FeaturedImageUrl { get; set; }
        public bool IsVisible { get; set; }
        public string AuthorName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
