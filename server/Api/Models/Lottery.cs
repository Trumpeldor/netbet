using System;

namespace Api.Models
{
    public class Lottery
    {
        public string Event { get; set; }

        public int Jackpot { get; set; }

        public string Currency { get; set; }

        public DateTime Closing { get; set; }
    }
}
