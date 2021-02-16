using System;

namespace Api.Models
{
    public class Lottery
    {
        public string Event { get; set; }

        public int Prize { get; set; }

        public string Currency { get; set; }

        public DateTime Date { get; set; }
    }
}
