using GraphQLOrleansApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

builder.Services
    .AddSingleton<ILiquiditySourceSummaryService, LiquiditySourceSummaryService>();

builder.Services
    .AddHostedService<SimulatedOrderWorker>();

var app = builder.Build();

app.MapGraphQL();

app.Run();
