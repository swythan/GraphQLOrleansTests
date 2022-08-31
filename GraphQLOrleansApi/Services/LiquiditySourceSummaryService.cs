namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.Model;
using System.Collections.Concurrent;
using System.Collections.Immutable;

public class LiquiditySourceSummaryService : ILiquiditySourceSummaryService
{
    private readonly ConcurrentDictionary<int, LiquiditySourceSummary> summaries = new();

    public void AddOrder(int liquiditySourceId)
    {
        summaries.AddOrUpdate(
            liquiditySourceId,
            id => new LiquiditySourceSummary(id, TotalOrderCount: 1, TotalRejectCount: 0),
            (_, prev) => prev with { TotalOrderCount = prev.TotalOrderCount + 1 });

    }

    public void AddReject(int liquiditySourceId)
    {
        summaries.AddOrUpdate(
            liquiditySourceId,
            id => new LiquiditySourceSummary(id, TotalOrderCount: 0, TotalRejectCount: 1),
            (_, prev) => prev with { TotalOrderCount = prev.TotalRejectCount + 1 });
    }

    public IEnumerable<LiquiditySourceSummary> GetSummaries()
    {
        return this.summaries.Values.ToList();
    }

    public LiquiditySourceSummary GetSummary(int liquiditySourceId)
    {
        return this.summaries[liquiditySourceId];
    }
}
