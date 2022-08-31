namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface ILiquiditySourceSummaryService
{
    ValueTask AddOrderAsync(int liquiditySourceId);
    ValueTask AddRejectAsync(int liquiditySourceId);

    IEnumerable<LiquiditySourceSummary> GetSummaries();
    LiquiditySourceSummary GetSummary(int liquiditySourceId);
}