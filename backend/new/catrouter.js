
const CatModel = require('./catmodel');
var router = express.Router()

router.get('/cats', async (req, res) => {
    const cats = await CatModel.find({});
    try {
      res.send(cats);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
router.post('/cat', async (req, res) => {
    const cat = new CatModel(req.body);
    try {
      await cat.save();
      res.send(cat);
    } catch (err) {
      res.status(500).send(err);
    }
  });
router.delete('/cat/:id', async (req, res) => {
    try {
      const cat = await CatModel.findByIdAndDelete(req.params.id)
  
      if (!cat) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

router.patch('/cat/:id', async (req, res) => {
    try {
      await CatModel.findByIdAndUpdate(req.params.id, req.body)
      await CatModel.save()
      res.send(cat)
    } catch (err) {
      res.status(500).send(err)
    }
  })
module.exports = router
