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
            { name: "Miami" },
            { name: "Sidi Beshr" },
            { name: "Loran" },
            { name: "Sidi Gaber" },
            { name: "Keliopatra" },
            { name: "Sporting" },
            { name: "Ibrahimia" },
            { name: "El Shatby" },
            { name: "Mahatet El Raml" }
        ]
    }
];

export function getCities() {
    return cities;
}

export function getAreas(city) {
    const cityAreas = areas.filter(obj=>(
        obj.city === city 
    ));
    
    return cityAreas.areas;
}