using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Api.Models;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdsController : ControllerBase
    {
        private readonly ILogger<AdsController> _logger;
        private static readonly List<Ads> _ads = JsonSerializer.Deserialize<List<Ads>>(System.IO.File.ReadAllText("Properties/dataSource.json"));

        public AdsController(ILogger<AdsController> logger)
        {
            _logger = logger;
        }

        [EnableCors("AllowOrigin")]
        [HttpGet]
        public IEnumerable<Ads> Get()
        {
            return _ads.ToArray();
        }
    }
}
