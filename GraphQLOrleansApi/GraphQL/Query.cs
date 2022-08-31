namespace GraphQLOrleansApi.GraphQL;

using GraphQLOrleansApi.Model;
using GraphQLOrleansApi.Services;

public class Query
{
    [UsePaging]
    public IEnumerable<LiquiditySourceInfo> GetLiquiditySourceInfo([Service] ILiquiditySourceInfoService liquiditySourceInfoService)
        => liquiditySourceInfoService.GetInfo();

    public LiquiditySourceInfo GetLiquiditySourceInfo(int id, [Service] ILiquiditySourceInfoService liquiditySourceInfoService)
        => liquiditySourceInfoService.GetInfo(id);

    [UsePaging]
    public IEnumerable<LiquiditySourceSummary> GetLiquiditySourceSummaries([Service] ILiquiditySourceSummaryService liquiditySourceSummaryService)
        => liquiditySourceSummaryService.GetSummaries();

    public LiquiditySourceSummary GetLiquiditySourceSummary(int id, [Service] ILiquiditySourceSummaryService liquiditySourceSummaryService)
        => liquiditySourceSummaryService.GetSummary(id);
}