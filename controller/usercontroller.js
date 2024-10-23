const { request } = require('../app');
var user = require('../model/usermodel');
var product = require('../model/product');

const bcrypt = require('bcrypt');

exports.index = async (req,res) => {
    try {

        var b_pass = await bcrypt.hash(req.body.password,10);
        req.body.password = b_pass;
        var data = await user.create(req.body);

        res.status(200).json({
            status:"success",
            data
        })

    } catch (error) {
        
        res.status(400).json({
            error
        })
    }
}

exports.check_password = async (req,res) => {
    try {

        var data = await user.find({"email":req.body.email});

        bcrypt.compare(req.body.password,data[0].password,function(err, result) {
                if(result==true)
                {
                    res.status(200).json({
                        status:"success"
                    })

                }else{
                    res.status(400).json({
                        status:"check your password"
                    })
                }
        });

    } catch (error) {
        
        res.status(400).json({
            error
        })
    }
}

exports.add_product = async (req,res) => {
    try {
        var data = await product.create(req.body);

        res.status(200).json({
            status:"success",
            data
        })

    } catch (error) {
        
        res.status(400).json({
            error
        })
    }
}

exports.view_product = async (req,res) => {
    try {
        var data = await product.find().populate("addby");

        res.status(200).json({
            status:"success",
            data
        })

    } catch (error) {
        
        res.status(400).json({
            error
        })
    }
}
