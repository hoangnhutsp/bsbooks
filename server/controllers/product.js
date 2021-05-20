"use strict";

import Product from '../models/product.js';
import Category from '../models/category.js'
const DEFAULT_Q = "";
const DEFAULT_PAGE = 1;
const SIZE_PAGE = 20;
const DEFAULT_PRICE = "0,100000000";
const DEFAULT_RATING = 1;
const DEFAULT_SORT = "review_count,desc";
const DEFAULT_CRITERIA = "desc";
const DEFAULT_CATEGORY  = 1;
const SIZE_OF_SUGGESTION = 6;


const getListCate = async (query) => {
    let category = query.category || DEFAULT_CATEGORY;
    if (category > 40) category = DEFAULT_CATEGORY;
    category = await Category.find({id: category})
    let id_path = category[0]["id_path"];
    console.log(id_path);
    let cate = await Category.find({id_path: { $regex: RegExp(`^${id_path}`)}})
    let arrCate = [];
    //cate.forEach(e => console.log(e["id_path"]));
    cate.forEach(element => arrCate.push(element["id"]));

    return arrCate;
}
const initQuery = async (query) => {
    let category = await getListCate(query);
    console.log(category);
    let price = query.price || DEFAULT_PRICE;
    price = String(price).split(',');
    let minPrice = price[0];
    let maxPrice = price[1];

    let rating = query.rating || DEFAULT_RATING;

    const queryString = {
        price: { $gt: minPrice, $lt: maxPrice },
        rating_average: { $gt: rating - 1 },
        id_category: { $in : category}
    }

    return queryString;
}

const trans = {
    default: 'view_count',
    price: 'price',
    newest: 'date',
}

const initSort = (query) => {

    let sort = String(query.sort || DEFAULT_SORT).split(',');
    let type = sort[0];
    let criteria = sort[1] || DEFAULT_CRITERIA;
    const queryString = {
        [type]: criteria,
    }

    return queryString;
}

const slicePage = (page, product) => {
    let len = product.length;
    page = page || DEFAULT_PAGE;
    if (page > (len - 1) / SIZE_PAGE + 1)
        page = 1;
    let start = (page - 1) * SIZE_PAGE;
    let end = Math.min(page * SIZE_PAGE, len);
    product = product.slice(start, end);
    return product;
}
export const getProduct = async (req, res) => {
    try {
        const query = req.query;
        const queryString = await initQuery(query);
        const sortString = initSort(query);
        let product = await Product.find(queryString).sort(sortString);
        product = slicePage(query.page, product)

        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getProductByID = async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id });
        if (product.length !== 0)
            res.status(200).json(product)
        else
            res.status(200).json({ message: "NOT FOUND" })

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const checkInfoProduct = (product) => {
    return true;
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!checkInfoProduct(product)) {
        res.status(500).json({ message: "Info not valid!!!" })
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
    if (!product) {
        return res.status(400).send({ message: "Data update can not empty" })
    }
    const _id = req.params.id;
    try {
        await Product.findByIdAndUpdate(_id, product, { useFindAndModify: false });
        res.status(201).json({ message: "sussessfully!!!" })
    } catch (error) {
        res.status(500).json({ message: "Error Update user information" });
    }

}

export const searchProduct = async (req, res) => {
    try {
        const query = req.query;

        let q = query.q;

        console.log(`SEARCH: ${q}`);

        let product = await Product
            .find({
                $text:
                {
                    $search: q,
                    $caseSensitive: false,
                    $diacriticSensitive: true
                }
            }, { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } })
        product = slicePage(query.page, product)

        console.log(product.length);
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const suggestionProduct = async (req, res) => {
    let query = req.query;
    let regex = new RegExp(query.q, 'i');

    console.log(`regex: ${regex}`);

    try {
        const product = await Product.find({name: regex}, {'name': 1}).limit(SIZE_OF_SUGGESTION);
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: error.message });  
    }
}