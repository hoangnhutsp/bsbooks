"use strict";

import Product from '../models/product.js';

const DEFAULT_Q         = "";
const DEFAULT_PAGE      = 1;
const DEFAULT_PRICE     = "0,100000000";
const DEFAULT_RATING    = 1;
const DEFAULT_SORT      = "review_count,desc";
const DEFAULT_CRITERIA  = "desc";

const initQuery = (query) => {
    let price = query.price || DEFAULT_PRICE;
    price = String(price).split(',');
    let minPrice = price[0];
    let maxPrice = price[1];

    let rating = query.rating || DEFAULT_RATING;
    const queryString = {
        price: { $gt: minPrice, $lt: maxPrice},
        rating_average: {$gt : rating - 1},
    }

    return queryString;
}

const trans = {
    default: 'view_count',
    price : 'price',
    newest: 'date',
}

const initSort = (query) => {
    
    let sort = String(query.sort || DEFAULT_SORT).split(',');
    let type = sort[0];
    let criteria = sort[1] || DEFAULT_CRITERIA;
    const queryString = {
        [type]: criteria
    }

    return queryString;
}
export const getProduct = async (req, res) => {
    try {
        const query = req.query;

        const queryString = initQuery(query);
        const sortString = initSort(query);

        console.log(query.q);
        const product = await Product.find(queryString).sort(sortString);
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const getProductByID = async (req, res) => {
    try {
        const product = await Product.find({_id: req.params.id});
        if (product.length !== 0)
            res.status(200).json(product)
        else
            res.status(200).json({message: "NOT FOUND"})
            
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const checkInfoProduct = (product) => {


    return true;
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!checkInfoProduct(product)) {
        res.status(500).json({message: "Info not valid!!!"})
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    const product = req.body;
    if (!product){
        return res.status(400).send({message: "Data update can not empty"})
    }

    const _id = req.params.id;

    try {
        await Product.findByIdAndUpdate(_id, product, {useFindAndModify: false });
        res.status(201).json({message: "sussessfully!!!"})
    } catch (error) {
        res.status(500).json({message: "Error Update user information"});
    }

}

export const searchProduct = async (req, res) => {
    try {
        const query = req.query;

        let q = query.q;

        console.log(`SEARCH: ${q}`);

        const product = await Product
        .find({
            $text:
              {
                $search: q,
                $caseSensitive: false,
                $diacriticSensitive: true
              }
            }, { score: { $meta: "textScore" } })
            .sort({score:{$meta:"textScore"}})
  
        product.forEach(element => {
            let np = element.toJSON();
            console.log(`${np.score} -- ${np.name}`);
        });
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}