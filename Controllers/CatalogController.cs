using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CarRental.Controllers
{
    public class CatalogController : Controller
    {

        private DataContext dbContext;
        public CatalogController(DataContext context) // injecting a db connection
        {
            this.dbContext = context;
        }
        public IActionResult Index()
        {
            return View(); // catalog page
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetCatalog()
        {

            // read the table
            var list = dbContext.Cars.ToList();
            return Json(list); // send it back as a json list
        }

        public IActionResult GetTrunks()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Sedan").ToList();
            return Json(list);
        }

        public IActionResult GetSendans()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Sedan").ToList();
            return Json(list);
        }

        [HttpPost]
        public IActionResult RegisterCar([FromBody] Car theCar)
        {
            System.Console.WriteLine("User is saving a new car");

            dbContext.Cars.Add(theCar);
            dbContext.SaveChanges();


            return Json(theCar); // return JSON object
        }

    }
}