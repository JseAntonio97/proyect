const controller ={};


controller.list =(req,res) => {
    req.getConnection((err,conn)=>{
conn.query('SELECT *FROM persona',(err, persona) =>{
if(err) {
    res.json(err);
}

res.render('persona',{
    data:persona
    
});
});
});
};

controller.save =(req,res) =>{
      const data = req.body;
 
   

     req.getConnection((err,conn)=>{
conn.query('INSERT INTO persona set ? ',[data],(err, persona) =>{
console.log(persona);

res.redirect('/'); 
});
});
 }

//edit
controller.edit = (req,res) =>{
    const { id } = req.params;
    req.getConnection(( err,conn) =>{
        conn.query('SELECT * FROM persona WHERE id = ?',[id],(err,persona) =>{
            res.render('persona_edit',{
                data:persona[0]
            });
        });
    }); 
};
controller.update =(req,res)=>{
const { id } = req.params;
const newPersona = req.body;
req.getConnection((err,conn) =>{
    conn.query('UPDATE persona set ? WHERE id = ?',[newPersona,id],(err,rows)=>{
res.redirect('/');
    });
});
};

 ///DELETE

 controller.delete =(req, res) =>{
    const { id } = req.params;
 
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM persona WHERE id = ?',[id], (err,rows) => {
res.redirect('/');
        });
    })

}; 


module.exports = controller;