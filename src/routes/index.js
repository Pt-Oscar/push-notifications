const {Router} = require('express');
const router = Router();

const webpush = require('../webpush');
let pushSubscription;

//primer paso suscribir usuario
router.post('/suscription', async (req,res,next) => {
    pushSubscription = req.body;
    res.status(200).json();
    
    const payload = JSON.stringify({
        title: 'PUTO',
        message: 'PRRO'
    })
    await webpush.sendNotification(pushSubscription, payload)
    console.log('correcet')
})



module.exports = router;