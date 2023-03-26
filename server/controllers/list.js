import List from '../models/List.js';

// CREATE LIST
export const createList = async (req, res) => {
  if (req.user.isAdmin) {
    const existingListName = await List.findOne({ title: req.body.title });
    if (existingListName) {
      res
        .status(422)
        .json({ message: 'List Title already exists Try Different one' });
      return;
    }
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You must be an administrator');
  }
};

// GET LIST BY ID
export const getListById = async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE LIST
export const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("The list has been Deleted.");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You must be an administrator');
    }
};

// GET LIST
export const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 }},
                    { $match: { type: typeQuery, genre: genreQuery }},
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 }},
                    { $match: { type: typeQuery }},
                ])
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 }}
            ]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
}
