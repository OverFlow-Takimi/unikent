namespace UniKent.API.Models;

public class Result
{
    public int Id { get; set; }
    public string CName { get; set; }
    public double Score { get; set; }
    public City City { get; set; }
}