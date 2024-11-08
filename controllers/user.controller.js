const userService=require('../services/user.service')
const userSignup=async(req,res)=>{
    try{
        const result=await userService.userSignup(req.body)
        if(result){
            return res.status(200).send({
                status:1,
                message:"User registered successfully!!",
                data:{}
            });
            
    
        }
        

    }
    catch(error){
        return res.status(400).send({
            status:0,
            message:error.message,
            data:{}
        });

    }
   


}

const userLogin = async (req, res) => {
    try {
      // Destructure the request body for email and password
      const { email, password } = req.body;
  
      // Call the login function from the auth service
      const { user, token } = await userService.userLogin(email, password);
  
      res
        .status(200)
        .send({ status: 1, message: "Login successful", data:{token:token}});
    } catch (error) {
      console.log(error);
      
      res.status(400).send({ message: error.message });
    }
  };

module.exports={
    userSignup,
    userLogin

}