const Material = require('../models/material.model');
const { errorHandler } = require('../utils/error');

// Create Material
exports.createMaterial = async (req, res, next) => {
  try {
    const newMaterial = await Material.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'Material created successfully!',
      newMaterial,
    });
  } catch (error) {
    return next(errorHandler(400, 'Failed to create material!'));
  }
};


exports.getMaterial = async (req, res, next) => {
  try {
    const materials = await Material.find(); 
    if (!materials || materials.length === 0) {
      return next(errorHandler(404, 'No materials found!'));
    }
    res.status(200).json({
      success: true,
      materials,
    });
  } catch (error) {
    next(errorHandler(500, 'Server error occurred while fetching materials.'));
  }
};
exports.getMaterialsbyID = async(req,res,next)=>{
  try {
    const materialsID = await Material.findById(req.params.id)
    if (!materialsID || materialsID.length === 0) {
      return next(errorHandler(404, 'No materials found!'));
    }
    res.status(200).json({
      success: true,
      materialsID ,
    });
  } catch (error) {
    next(errorHandler(500, 'Server error occurred while fetching materials.'));
  }
}