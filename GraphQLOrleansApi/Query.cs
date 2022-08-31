using GraphQLOrleansApi.Model;
using GraphQLOrleansApi.Services;

public class Query
{
    [UsePaging]
    public IEnumerable<LiquiditySourceSummary> GetLiquiditySourceSummaries([Service] ILiquiditySourceSummaryService liquiditySourceSummaryService)
        => liquiditySourceSummaryService.GetSummaries();

    public LiquiditySourceSummary GetLiquiditySourceSummary(int id, [Service] ILiquiditySourceSummaryService liquiditySourceSummaryService)
        => liquiditySourceSummaryService.GetSummary(id);
}
