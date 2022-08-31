using GraphQLOrleansApi.GraphQL;
using GraphQLOrleansApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .AddTypeExtension<LiquiditySourceSummaryExtensions>()
    .AddQueryType<Query>();

builder.Services
    .AddSingleton<ILiquiditySourceInfoService, LiquiditySourceInfoService>()
    .AddSingleton<ILiquiditySourceSummaryService, LiquiditySourceSummaryService>();

builder.Services
    .AddHostedService<SimulatedOrderWorker>();

var app = builder.Build();

app.MapGraphQL();

app.Run();
