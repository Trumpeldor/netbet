using Api.Controllers;
using Api.Models;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace ApiTests
{
    public class LotteryTests
    {
        [Fact]
        public void AdsService_GetAdsSync()
        {
            //Arrange
            var mock = new Mock<ILogger<LotteryController>>();

            //Act
            var service = new LotteryController(mock.Object);
            var result = service.Get();

            //Assert
            var arrResult = result as Lottery[];
            Assert.NotNull(arrResult);
            Assert.Equal(2, arrResult.Length);
            Assert.Equal(422, arrResult[0].Jackpot);
            Assert.Equal("€", arrResult[1].Currency);
        }
    }
}
