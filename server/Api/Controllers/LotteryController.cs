using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Text.Json;
using Api.Models;
using System;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LotteryController : ControllerBase
    {
        private readonly ILogger<LotteryController> _logger;
        private static readonly List<Lottery> _lotteries = JsonSerializer.Deserialize<List<Lottery>>(System.IO.File.ReadAllText("Properties/dataSource.json"));

        static LotteryController()
        {
            _lotteries.ForEach(l => l.Logo = GetBase64(l.Logo));
        }

        public LotteryController(ILogger<LotteryController> logger)
        {
            _logger = logger;
        }

        private static string GetBase64(string fileName)
        {
            if (fileName != null)
            {
                return "data:image/png;base64," + Convert.ToBase64String(System.IO.File.ReadAllBytes("Images/" + fileName + ".png"));
            }

            return null;
        }

        [EnableCors("AllowOrigin")]
        [HttpGet]
        public IEnumerable<Lottery> Get()
        {
            return _lotteries.ToArray();
        }
    }
}
