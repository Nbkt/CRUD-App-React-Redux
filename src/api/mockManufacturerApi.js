import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const manufacturers = [
  {
    id: 'intel',
    name: "Intel"
  },
  {
    id: 'amd',
    name: "AMD"
  },
  {
    id: 'asus',
    name: "ASUS"
  },

  {
    id: 'msi',
    name: "MSI"
  }

];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (manufacturer) => {
  return manufacturers.name.toLowerCase();
};

class ManufacturesApi {
  static getAllManufactures() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], manufacturers));
      }, delay);
    });
  }

  static getManufacturerById(manufacturerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfManufacturerToGet = manufacturers.findIndex(manufacturer => {
          manufacturer.manufacturerId == manufacturerId;
        });
        let manufacturerS = manufacturers[indexOfManufacturerToGet];
        resolve(manufacturerS);
      }, delay);
    });

  }

  static saveManufacturers(manufacturer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minManufacturersNameLength = 3;
        if (manufacturer.name.length < minManufacturersNameLength) {
          reject(`Name must be at least ${minManufacturersNameLength} characters.`);
        }

        if (manufacturer.lastName.length < minManufacturersNameLength) {
          reject(`Name must be at least ${minManufacturersNameLength} characters.`);
        }

        if (manufacturer.id) {
          const existingManufacturerIndex = manufacturers.findIndex(a => a.id == manufacturer.id);
          manufacturers.splice(existingManufacturerIndex, 1, manufacturer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          manufacturer.id = generateId(manufacturer);
          manufacturers.push(manufacturer);
        }

        resolve(Object.assign({}, manufacturer));
      }, delay);
    });
  }

  static deleteManufacturer(manufacturerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfManufacturerToDelete = manufacturers.findIndex(manufacturer => {
          manufacturer.manufacturerId == manufacturerId;
        });
        manufacturers.splice(indexOfManufacturerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ManufacturesApi;
