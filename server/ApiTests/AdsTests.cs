using Api.Controllers;
using Api.Models;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace ApiTests
{
    public class AdsTests
    {
        [Fact]
        public void AdsService_GetAdsSync()
        {
            //Arrange
            var mock = new Mock<ILogger<AdsController>>();

            //Act
            var service = new AdsController(mock.Object);
            var result = service.Get();

            //Assert
            var arrResult = result as Ads[];
            Assert.NotNull(arrResult);
            Assert.Equal(2, arrResult.Length);
            Assert.Equal(422, arrResult[0].Prize);
            Assert.Equal("€", arrResult[1].Currency);
        }
    }
}
