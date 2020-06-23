
const carBrands = [
    {
        label: "Abarth",
        value: "Abarth"
    },
    {
        label: "Alfa Romeo",
        value: "Alfa Romeo"
    },
    {
        label: "Asia Motors",
        value: "Asia Motors"
    },
    {
        label: "Aston Martin",
        value: "Aston Martin"
    },
    {
        label: "Audi",
        value: "Audi"
    },
    {
        label: "Austin",
        value: "Austin"
    },
    {
        label: "Autobianchi",
        value: "Autobianchi"
    },
    {
        label: "Bentley",
        value: "Bentley"
    },
    {
        label: "BMW",
        value: "BMW"
    },
    {
        label: "Bugatti",
        value: "Bugatti"
    },
    {
        label: "Buick",
        value: "Buick"
    },
    {
        label: "Cadillac",
        value: "Cadillac"
    },
    {
        label: "Carver",
        value: "Carver"
    },
    {
        label: "Chevrolet",
        value: "Chevrolet"
    },
    {
        label: "Chrysler",
        value: "Chrysler"
    },
    {
        label: "Citroen",
        value: "Citroen"
    },
    {
        label: "Corvette",
        value: "Corvette"
    },
    {
        label: "Dacia",
        value: "Dacia"
    },
    {
        label: "Daewoo",
        value: "Daewoo"
    },
    {
        label: "Daihatsu",
        value: "Daihatsu"
    },
    {
        label: "Daimler",
        value: "Daimler"
    },
    {
        label: "Datsun",
        value: "Datsun"
    },
    {
        label: "Dodge",
        value: "Dodge"
    },
    {
        label: "Donkervoort",
        value: "Donkervoort"
    },
    {
        label: "DS",
        value: "DS"
    },
    {
        label: "Ferrari",
        value: "Ferrari"
    },
    {
        label: "Fiat",
        value: "Fiat"
    },
    {
        label: "Fisker",
        value: "Fisker"
    },
    {
        label: "Ford",
        value: "Ford"
    },
    {
        label: "FSO",
        value: "FSO"
    },
    {
        label: "Galloper",
        value: "Galloper"
    },
    {
        label: "Honda",
        value: "Honda"
    },
    {
        label: "Hummer",
        value: "Hummer"
    },
    {
        label: "Hyundai",
        value: "Hyundai"
    },
    {
        label: "Infiniti",
        value: "Infiniti"
    },
    {
        label: "Innocenti",
        value: "Innocenti"
    },
    {
        label: "Jaguar",
        value: "Jaguar"
    },
    {
        label: "Jeep",
        value: "Jeep"
    },
    {
        label: "Josse",
        value: "Josse"
    },
    {
        label: "Kia",
        value: "Kia"
    },
    {
        label: "Lada",
        value: "Lada"
    },
    {
        label: "Lamborghini",
        value: "Lamborghini"
    },
    {
        label: "Lancia",
        value: "Lancia"
    },
    {
        label: "Land Rover",
        value: "Land Rover"
    },
    {
        label: "Landwind",
        value: "Landwind"
    },
    {
        label: "Lexus",
        value: "Lexus"
    },
    {
        label: "Lincoln",
        value: "Lincoln"
    },
    {
        label: "Lotus",
        value: "Lotus"
    },
    {
        label: "Marcos",
        value: "Marcos"
    },
    {
        label: "Maserati",
        value: "Maserati"
    },
    {
        label: "Maybach",
        value: "Maybach"
    },
    {
        label: "Mazda",
        value: "Mazda"
    },
    {
        label: "McLaren",
        value: "McLaren"
    },
    {
        label: "Mega",
        value: "Mega"
    },
    {
        label: "Mercedes",
        value: "Mercedes"
    },
    {
        label: "Mercury",
        value: "Mercury"
    },
    {
        label: "MG",
        value: "MG"
    },
    {
        label: "Mini",
        value: "Mini"
    },
    {
        label: "Mitsubishi",
        value: "Mitsubishi"
    },
    {
        label: "Morgan",
        value: "Morgan"
    },
    {
        label: "Morris",
        value: "Morris"
    },
    {
        label: "Nissan",
        value: "Nissan"
    },
    {
        label: "Noble",
        value: "Noble"
    },
    {
        label: "Opel",
        value: "Opel"
    },
    {
        label: "Peugeot",
        value: "Peugeot"
    },
    {
        label: "PGO",
        value: "PGO"
    },
    {
        label: "Pontiac",
        value: "Pontiac"
    },
    {
        label: "Porsche",
        value: "Porsche"
    },
    {
        label: "Princess",
        value: "Princess"
    },
    {
        label: "Renault",
        value: "Renault"
    },
    {
        label: "Rolls-Royce",
        value: "Rolls-Royce"
    },
    {
        label: "Rover",
        value: "Rover"
    },
    {
        label: "Saab",
        value: "Saab"
    },
    {
        label: "Seat",
        value: "Seat"
    },
    {
        label: "Skoda",
        value: "Skoda"
    },
    {
        label: "Smart",
        value: "Smart"
    },
    {
        label: "Spectre",
        value: "Spectre"
    },
    {
        label: "SsangYong",
        value: "SsangYong"
    },
    {
        label: "Subaru",
        value: "Subaru"
    },
    {
        label: "Suzuki",
        value: "Suzuki"
    },
    {
        label: "Talbot",
        value: "Talbot"
    },
    {
        label: "Tesla",
        value: "Tesla"
    },
    {
        label: "Think",
        value: "Think"
    },
    {
        label: "Toyota",
        value: "Toyota"
    },
    {
        label: "Triumph",
        value: "Triumph"
    },
    {
        label: "TVR",
        value: "TVR"
    },
    {
        label: "Volkswagen",
        value: "Volkswagen"
    },
    {
        label: "Volvo",
        value: "Volvo"
    },
    {
        label: "Yugo",
        value: "Yugo"
    }
];

const centerServices = [
    {
        label: '4x4 Services',
        value: '4x4 Services'
    },
    {
        label: 'Batteries',
        value: 'Batteries'
    },
    {
        label: 'Brakes',
        value: 'Brakes'
    },
    {
        label: 'Car & Truck Care',
        value: 'Car & Truck Care'
    },
    {
        label: 'Domestic Cars & Trucks',
        value: 'Domestic Cars & Trucks'
    },
    {
        label: 'Electrical Services',
        value: 'Electrical Services'
    },
    {
        label: 'Electronic Services',
        value: 'Electronic Services'
    },
    {
        label: 'Engine & Transmission',
        value: 'Engine & Transmission'
    },
    {
        label: 'Engine Maintenance',
        value: 'Engine Maintenance'
    },
    {
        label: 'Fleet Brakes',
        value: 'Fleet Brakes'
    },
    {
        label: 'Fleet Drive Train',
        value: 'Fleet Drive Train'
    },
    {
        label: 'Fleet Electrical',
        value: 'Fleet Electrical'
    },
    {
        label: 'Fleet Electronics',
        value: 'Fleet Electronics'
    },
    {
        label: 'Fleet Engine Work',
        value: 'Fleet Engine Work'
    },
    {
        label: 'Fleet Front End Services',
        value: 'Fleet Front End Services'
    },
    {
        label: 'Fleet General Services',
        value: 'Fleet General Services'
    },
    {
        label: 'Fleet Suspension Work',
        value: 'Fleet Suspension Work'
    },
    {
        label: 'Fleet Wheel Services',
        value: 'Fleet Wheel Services'
    },
    {
        label: 'General Services',
        value: 'General Services'
    },
    {
        label: 'Heating and Cooling Services',
        value: 'Heating and Cooling Services'
    },
    {
        label: 'Import Cars & Trucks',
        value: 'Import Cars & Trucks'
    },
    {
        label: 'Miscellaneous Services',
        value: 'Miscellaneous Services'
    },
    {
        label: 'Quick Lube Services',
        value: 'Quick Lube Services'
    },
    {
        label: 'Towing',
        value: 'Towing'
    },
    {
        label: 'Transmission Services',
        value: 'Transmission Services'
    },
    {
        label: 'Undercar Services',
        value: 'Undercar Services'
    }
];

export function getCarBrands(){
    return carBrands;
}

export function getCenterServices(){
    return centerServices;
}

export async function getBrandModels(brand) {

    const where = encodeURIComponent(JSON.stringify({
        "Make": brand
      }));
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?excludeKeys=Category&where=${where}`,
        {
          headers: {
            'X-Parse-Application-Id': 'kCUq5riIQe1TrbJDdPOBn8m8PgsPRLN78aHBRRCk', // This is your app's application id
            'X-Parse-REST-API-Key': 'Dz1KlLP4ffQwZx078uD3yPR07PSzK0JYQwpy2aIO', // This is your app's REST API key
          }
        }
      );
      const data = await response.json(); // Here you have the data that you need
      const models = data.results.map(result => (
          result.Model
      ));

      return models;
}

export async function getModelYears(model) {
    const where = encodeURIComponent(JSON.stringify({
        "Model": model
      }));
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?excludeKeys=Category&where=${where}`,
        {
          headers: {
            'X-Parse-Application-Id': 'kCUq5riIQe1TrbJDdPOBn8m8PgsPRLN78aHBRRCk', // This is your app's application id
            'X-Parse-REST-API-Key': 'Dz1KlLP4ffQwZx078uD3yPR07PSzK0JYQwpy2aIO', // This is your app's REST API key
          }
        }
      );
      const data = await response.json(); // Here you have the data that you need
      const years = data.results.map(year => (
        year.Year
        ));

      return years;

}

