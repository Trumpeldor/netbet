using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Text.Json;
using Api.Models;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LotteryController : ControllerBase
    {
        private readonly ILogger<LotteryController> _logger;
        private static readonly List<Lottery> _lotteries = JsonSerializer.Deserialize<List<Lottery>>(System.IO.File.ReadAllText("Properties/dataSource.json"));

        public LotteryController(ILogger<LotteryController> logger)
        {
            _logger = logger;
        }

        [EnableCors("AllowOrigin")]
        [HttpGet]
        public IEnumerable<Lottery> Get()
        {
            return _lotteries.ToArray();
        }
    }
}
