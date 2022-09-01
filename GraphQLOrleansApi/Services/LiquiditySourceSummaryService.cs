namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.GraphQL;
using GraphQLOrleansApi.Model;
using HotChocolate.Subscriptions;
using System.Collections.Concurrent;
using System.Collections.Immutable;

public class LiquiditySourceSummaryService : ILiquiditySourceSummaryService
{
    private readonly ITopicEventSender eventSender;

    private readonly ConcurrentDictionary<int, LiquiditySourceSummary> summaries = new();

    public LiquiditySourceSummaryService(ITopicEventSender eventSender)
    {
        this.eventSender = eventSender;
    }

    public async ValueTask AddOrderAsync(int liquiditySourceId)
    {
        var summary = summaries.AddOrUpdate(
            liquiditySourceId,
            id => new LiquiditySourceSummary(id, TotalOrderCount: 1, TotalRejectCount: 0),
            (_, prev) => prev with { TotalOrderCount = prev.TotalOrderCount + 1 });

        await this.eventSender.SendAsync(nameof(Subscriptions.SummaryUpdated), summary);
    }

    public async ValueTask AddRejectAsync(int liquiditySourceId)
    {
        var summary = summaries.AddOrUpdate(
            liquiditySourceId,
            id => new LiquiditySourceSummary(id, TotalOrderCount: 0, TotalRejectCount: 1),
            (_, prev) => prev with { TotalRejectCount = prev.TotalRejectCount + 1 });

        await this.eventSender.SendAsync(nameof(Subscriptions.SummaryUpdated), summary);
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
