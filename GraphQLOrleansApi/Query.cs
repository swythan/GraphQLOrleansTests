public class Query
{
    public Book GetBook() =>
        new()
        {
            Title = "C# in depth.",
            Author = new()
            {
                Name = "Jon Skeet"
            }
        };
}
