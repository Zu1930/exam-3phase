const router = require('express').Router();
const { Singer } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const singers = await Singer.findAll();

    res.status(200).json(singers);
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img } = req.body;

    if (name && img) {
      const singer = await Singer.create({
        name,
        img,
      });

      res.status(201).json(singer);
    } else {
      res.status(400).json({ message: 'Не все поля заполнены' });
    }
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

router.delete('/:singerId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const result = await Singer.destroy({ where: { id: albumId } });

    if (result > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
