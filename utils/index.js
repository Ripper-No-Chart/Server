const products = [];

var id = 1; //God forgive me
function idGen() {
  return id++;
}

//***************************//
//HTTP STATE CODES//
//***************************//
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

function getAll() {
  return new Promise((resolve, reject) => {
    if (products.length === 0) return reject(NOT_FOUND);
    return resolve(products);
  });
}

function deleteById(id) {
  return new Promise((resolve, reject) => {
    if (typeof id != "number") return reject(BAD_REQUEST);
    const index = products.findIndex((i) => i.id === id); //Index: find index in array of objects by id
    if (index !== -1) {
      //!==-1: if index is -1 => cant not find id
      products.splice(index, 1); //Splice: remove the item if find by index
      return resolve({ message: id + " deleted" });
    } else {
      return reject(NOT_FOUND);
    }
  });
}

function editById(id, product, price) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "number" || typeof product !== "string" || typeof price !== "number")
      return reject(BAD_REQUEST);
    const index = products.findIndex((i) => i.id === id); //Index: find index in array of objects by id
    if (index !== -1) {
      //!==-1: if index is -1 => cant not find id
      products[index].product = product;
      products[index].price = price;
      return resolve(findById(id));
    } else {
      return reject(NOT_FOUND);
    }
  });
}

function findById(id) {
  const parsedID = parseInt(id);
  return new Promise((resolve, reject) => {
    if (typeof parsedID !== "number") return reject(BAD_REQUEST);
    const index = products.findIndex((i) => i.id === parsedID); //Index: find index in array of objects by id
    if (index !== -1) return resolve(products[index]); //!==-1: if index is -1 => cant not find id
    return reject(NOT_FOUND);
  });
}

function addNewProduct(product, price) {
  return new Promise((resolve, reject) => {
    if (typeof product !== "string" || typeof price !== "number") return reject(BAD_REQUEST);
    const id = idGen(); //id: get a new id from idGen
    products.push({
      id,
      product,
      price,
    });
    return resolve(findById(id)); //resolve: return an object with id passing in the findById Function
  });
}

module.exports = {
  findById,
  addNewProduct,
  editById,
  deleteById,
  getAll,
};
