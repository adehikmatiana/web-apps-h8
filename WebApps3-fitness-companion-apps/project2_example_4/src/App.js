const roomFacilities = ["Private bathroom", "Air conditioning", "Balcony", "Bathtub", "Coffee", "machine", "Electric", "Flat screenTV", "Kitchen", "Soundproof", "Tea", "Coffee maker", "Washing machine"];

const roomAccessibility = ["Upper floors accessible by elevator", "Walk-in Shower", "Toilet With Grab Rails", "Lower Sink", "Raised Toilet Shower Chair"];

const roomsList = [
    {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Coffee", "machine", "Electric", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", "Toilet With Grab Rails", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'https://picsum.photos/200/300',
        type: 'vip',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Balcony", "Bathtub", "Kitchen", "Soundproof", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", "Toilet With Grab Rails", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'special',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["kettle", "Flat screenTV", "Kitchen", "Soundproof", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", "Toilet With Grab Rails", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'special',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Bathtub", "Coffee", "machine", "Electric", "kettle", "Flat screenTV", "Kitchen", "Soundproof", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Toilet With Grab Rails", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'vip',
        size: 'medium',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Bathtub", "Coffee", "machine", "Electric", "kettle", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'special',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", ],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'normal',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'special',
        size: 'medium',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Balcony", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Toilet With Grab Rails", "Roll-in Shower", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'normal',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "kettle", "Flat screenTV", "Kitchen", "Soundproof", "Tea", "Coffee maker", "Washing machine"],
        roomAccessibility: ["Upper floors accessible by elevator", "Walk-in Shower", "Toilet With Grab Rails"],
        price: '400$'
    }, {
        img: 'http://www.easyjet.com/en/holidays/thumb/giata/bigger/00/001665/001665a_hb_ro_026.jpg',

        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        roomFacilities: ["Private bathroom", "Air conditioning", "Coffee", "machine", "Electric", "Flat screenTV", "Tea", "Coffee maker"],
        roomAccessibility: ["Walk-in Shower", "Toilet With Grab Rails", "Lower Sink", "Raised Toilet Shower Chair"],
        price: '400$'
    }
];
export default {
    data() {
        return {
            work: 'Filter By :',

            rooms: roomsList,
            fullCattegroysList: '',
            roomFacilities,
            roomAccessibility,
            fiteringOption: {
                type: 'All types',
                size: 'All sizes',
                checkedFacilities: [],
                checkedAccessibility: []
            },
            showChecked: false
        }
    },
    methods: {
        roomFilterByType: function (event) {
            //            console.log(event.target.value);
            this.fiteringOption.type = event.target.value;
        },
        roomFilterBySize: function (event) {
            //            console.log(event.target.value);
            this.fiteringOption.size = event.target.value;
        }

    },
    computed: {
        uniqueTypes: function () {
            const types = [];
            this.rooms.forEach(room => {
                if (!types.includes(room.type)) {
                    types.push(room.type);
                }
            });
            return types;
        },
        uniqueSizes: function () {
            const sizes = [];
            this.rooms.forEach(room => {
                if (!sizes.includes(room.size)) {
                    sizes.push(room.size);
                }
            });
            return sizes;
        },
        filteredRooms: function () {
            return this.rooms.filter(room => {
                if (this.fiteringOption.type === 'All types' || this.fiteringOption.sizes === 'All sizes') {
                    return true;
                }
                if (this.fiteringOption.type !== 'All types' && room.type !== this.fiteringOption.type) {
                    return false; //if room type dosent match all types or the selected option filter it out 
                }
                if (this.fiteringOption.type !== 'All sizes' && room.type !== this.fiteringOption.type) {
                    return false;
                }
                if (!room.roomFacilities.includes(...this.fiteringOption.checkedFacilities)) {
                    return false; //filter out the room out if it dosent have the specified facilities
                }
                if (!room.roomAccessibility.includes(...this.fiteringOption.checkedAccessibility)) {
                    return false;
                }
                return true;
            });
        }
    }
}
