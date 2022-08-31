namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.Model;

public class LiquiditySourceInfoService : ILiquiditySourceInfoService
{
    private readonly Dictionary<int, LiquiditySourceInfo> info;

    public LiquiditySourceInfoService()
    {
        this.info = new() {
            { 1, new ( 1,  "Default", 0.01m) },
            { 2, new ( 2,  "Foo", 0.02m) },
            { 3, new ( 3,  "Bar", 0.03m) },
            { 4, new ( 4,  "Quux", 0.04m) },
            { 5, new ( 5,  "James", 0.05m) },
            { 6, new ( 6,  "Martin", 0.06m) },
            { 7, new ( 7,  "Tom", 0.07m) },
            { 8, new ( 8,  "Angela", 0.08m) },
            { 9, new ( 9,  "Isaac", 0.9m) },
            { 10, new (10, "Other Tom", 0.10m) },
            { 11, new (11, "Yelun", 0.11m) },
            { 12, new (12, "A N Other", 0.12m) },
            { 13, new (13, "More Liquidity", 0.13m) },
            { 14, new (14, "Bored now", 0.14m) },
            { 15, new (15, "Whatever", 0.15m) },
        };
    }

    public IEnumerable<LiquiditySourceInfo> GetInfo()
    {
        return this.info.Values.ToList();
    }

    public LiquiditySourceInfo GetInfo(int liquiditySourceId)
    {
        return this.info[liquiditySourceId];
    }
}