var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'pranathimurakonda@gmail.com',
        Pass:'kyrjr hjsdk hjjfd hdwtap'
    }
    
});
var mailOptions={
    from:'kottapallihemasri@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'Good Afternoon sir',
    text:'20A21A05C9'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('email sent to successfully'+ info.response);
    }
})