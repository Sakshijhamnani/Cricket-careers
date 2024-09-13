const Data = require('../models/careers')

exports.getData = async(req,res)=>{
    try {
      const data = await Data.findAll();
      res.json(data.map(data=>data.dataValues));  
    } catch (error) {
       console.log(err);
       res.status(500).json({success:false,message:'Internal Server Error'}); 
    }
}

exports.getDataById = async (req,res) =>{
    const dataId = req.params.id;
    try {
        const data = await findByPk(dataId);
        if(data){
            res.json({success:true,...data.dataValues})
        }else{
            res.status(404).json({success:false,message:'Data not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal Server Error '})
    }


}

exports.postData = async(req,res) =>{
    const {name,dob,imageUrl,birthPlace,careerDesc,matches,score,fifties,centuries,wickets,average}=req.body;

    try {
        
    } catch (error) {
        
    }
}