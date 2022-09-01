using GraphQLOrleansApi.GraphQL;
using GraphQLOrleansApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .AddTypeExtension<LiquiditySourceSummaryExtensions>()
    .AddQueryType<Query>()
    .AddSubscriptionType<Subscriptions>()
    .AddInMemorySubscriptions();

builder.Services
    .AddSingleton<ILiquiditySourceInfoService, LiquiditySourceInfoService>()
    .AddSingleton<ILiquiditySourceSummaryService, LiquiditySourceSummaryService>();

builder.Services
    .AddHostedService<SimulatedOrderWorker>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.SetIsOriginAllowed(origin => new Uri(origin).IsLoopback)
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


var app = builder.Build();

app.UseWebSockets();
app.UseCors();

app.MapGraphQL();

app.MapGet("/liquiditySources/info", (ILiquiditySourceInfoService infoService) => infoService.GetInfo());
app.MapGet("/liquiditySources/summary", (ILiquiditySourceSummaryService summaryService) => summaryService.GetSummaries());

app.Run();
