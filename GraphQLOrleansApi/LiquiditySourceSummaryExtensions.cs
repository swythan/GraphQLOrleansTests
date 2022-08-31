namespace GraphQLOrleansApi;

using GraphQLOrleansApi.Model;
using GraphQLOrleansApi.Services;

[ExtendObjectType(typeof(LiquiditySourceSummary))]
public class LiquiditySourceSummaryExtensions
{
    [BindMember(nameof(LiquiditySourceSummary.LiquiditySourceId))]
    public LiquiditySourceInfo GetLiquiditySource(
        [Parent] LiquiditySourceSummary summary,
        [Service] ILiquiditySourceInfoService liquiditySourceInfoService)
    {
        return liquiditySourceInfoService.GetInfo(summary.LiquiditySourceId);
    }
}