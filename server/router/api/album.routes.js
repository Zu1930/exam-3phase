const router = require('express').Router();
const { Album } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll();

    res.status(200).json(albums);
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { poster, desription } = req.body;

    if (poster && desription) {
      const album = await Album.create({
        poster,
        desription,
      });

      res.status(201).json({ album });
    } else {
      res.status(400).json({ message: 'Не все поля заполнены' });
    }
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

router.put('/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { isListened } = req.body;
    const album = await Album.findOne({ where: { id: albumId } });

    album.isListened = isListened;
    album.save();

    res.status(200).json({ album });
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

router.delete('/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const result = await Album.destroy({ where: { id: albumId } });

    if (result > 0) {
      res.status(200).json({ message: 'success', id: albumId });
    }
  } catch ({ error }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
