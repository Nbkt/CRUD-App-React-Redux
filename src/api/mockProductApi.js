import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "i7-4970k",
    title: "Intel Core i7-4790K Devil's Canyon Quad-Core 4.0 GHz LGA 1150 BX80646I74790K Desktop",
    linkHref: "http://www.newegg.com/Product/Product.aspx?Item=N82E16819117369",
    manufacturerId: "intel",
    category: "CPU"
  },
  {
    id: "i7-5820k",
    title: "Intel Core i7-5820K Haswell-E 6-Core 3.3 GHz LGA 2011-v3 140W BX80648I75820K Desktop ",
    linkHref: "http://www.newegg.com/Product/Product.aspx?Item=N82E16819117369",
    manufacturerId: "intel",
    category: "CPU"
  },
  {
    id: "i5-4690K",
    title: "Intel Core i5-4690K Devil's Canyon Quad-Core 3.5 GHz LGA 1150 88W BX80646I54690K ",
    linkHref: "http://www.newegg.com/Product/Product.aspx?Item=N82E16819117369",
    manufacturerId: "intel",
    category: "CPU"
  },
  {
    id: "FX-8350k",
    title: "AMD FX-8350 Black Edition Vishera 8-Core 4.0 GHz (4.2 GHz Turbo) Socket AM3+ 125W ",
    linkHref: "http://www.newegg.com/Product/Product.aspx?Item=N82E16819117369",
    manufacturerId: "amd",
    category: "CPU"
  },
  {
    id: "FX-6300",
    title: "AMD FX-6300 Vishera 6-Core 3.5 GHz (4.1 GHz Turbo) Socket AM3+ 95W FD6300WMHKBOX Desktop ",
    linkHref: "http://www.newegg.com/Product/Product.aspx?Item=N82E16819117369",
    manufacturerId: "amd",
    category: "CPU"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return replaceAll(product.title, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    product = Object.assign({}, product); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProductTitleLength = 1;
        if (product.title.length < minProductTitleLength) {
          reject(`Title must be at least ${minProductTitleLength} characters.`);
        }

        if (product.id) {
          const existingProductIndex = products.findIndex(a => a.id == product.id);
          products.splice(existingProductIndex, 1, product);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          product.linkHref = `http://www.newegg.com/products/${product.id}`;
          products.push(product);
        }

        resolve(product);
      }, delay);
    });
  }

  static deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProductToDelete = products.findIndex(product => {
          product.productId == productId;
        });
        products.splice(indexOfProductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
