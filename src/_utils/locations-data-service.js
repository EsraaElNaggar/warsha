
// cities names
const cities = [
    {
        lable: 'Cairo',
        value: 'Cairo'
    },
    {
        lable: 'Giza',
        value: 'Giza'
    },
    {
        lable: 'Alexandria',
        value: 'Alexandria'
    }
];

// areas of cities
const areas = [
    {
        city: 'Cairo',
        areas: [
            'Nasr City',
            'Maadi',
            'New Cairo'
        ]
    },
    {
        city: 'Giza',
        areas: [
            'Giza Square',
            'Elharam',
            'Eldokki',
            'Elmohndseen',
            '6 October'
        ]
    },
    {
        city: 'Alexandria',
        areas: [
            "Miami",
            "Sidi Beshr",
            "Loran",
            "Sidi Gaber",
            "Keliopatra",
            "Sporting",
            "Ibrahimia",
            "El Shatby",
            "Mahatet El Raml"
        ]
    }
];

// get cities
export function getCities() {
    return cities;
}

// get areas of a chosen city
export function getAreas(city) {
    const cityAreas = areas.filter(obj=>(
        obj.city === city 
    ));
    
    return cityAreas[0].areas;
}