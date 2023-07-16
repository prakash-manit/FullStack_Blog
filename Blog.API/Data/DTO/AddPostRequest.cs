namespace Blog.API.Data.Model
{
    public class AddPostRequest
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string? Summary { get; set; }
        public string? UrlHandle { get; set; }
        public string? FeaturedImageUrl { get; set; }
        public bool IsVisible { get; set; }
        public string AuthorName { get; set; }       
    }
}
