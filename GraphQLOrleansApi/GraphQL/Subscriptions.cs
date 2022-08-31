namespace GraphQLOrleansApi.GraphQL;

using GraphQLOrleansApi.Model;

public class Subscriptions
{
    [Subscribe]
    public LiquiditySourceSummary SummaryUpdated([EventMessage] LiquiditySourceSummary summary) => summary;
}