import mongoose from 'mongoose';
import Invoice from '../models/invoice.js';

import {valueStatusInvoice} from '../constant/invoice.js';
const checkDataInvoice = (data) => {
    return true;
}

export const createInvoice = async (req, res) => {
    try {
        let data = req.body;
        data.userID = req.userID;
        if (!checkDataInvoice(data)) {
            return res.status(200).json({ status: 0, message: `Du lieu khong hop le` });
        }
        data.update = [
            new Date
        ];

        const invoice = new Invoice(data);

        await invoice.save();
        res.status(200).json({status: 1, invoice});
    } catch (error) {
        res.status(200).json({ status: 0, message: error.message })
    }
}

export const updateInvoice = async (req, res) => {
    try {
        let _id = req.params.id;
        const invoice =await Invoice.findOne({_id})

        if (invoice) {
            let {status_invoice, update} = invoice;
            status_invoice++;
            update.push(new Date);

            const invoice_new = await Invoice.findByIdAndUpdate({_id}, {status_invoice, update}, {new : true})
            res.status(200).json({status: 1, invoice_new});
        } else {
            res.status(200).json({status: 1, message: `_id not found`});
        }

    } catch (error) {
        res.status(200).json({status: 0, message: error.message});
    }
}

export const getInvoice = async (req, res) => {
    try {
        const userID = req.userID;
        const invoice =await Invoice.find({userID})
        res.status(200).json({status: 1, invoice});
    } catch (error) {
        res.status(200).json({status: 0, message: error.message});
    }
}

export const getInvoiceByID = async (req, res) => {
    try {
        let _id = req.params.id;
        let invoice =await Invoice.findOne({_id})
        res.status(200).json({status: 1, invoice});
    } catch (error) {
        res.status(200).json({status: 0, message: error.message});
    }

}
