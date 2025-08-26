import foodModel from "../models/foodModels.js";

const addFood = async (req, res) => {
  try {
    // kalau file nggak ada, kasih default
    let image_filename = req.file ? req.file.filename : "default.png";

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error", error: error.message });
  }
};

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Remove"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


export { addFood, listFood, removeFood };
