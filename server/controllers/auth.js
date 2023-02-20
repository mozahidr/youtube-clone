import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt  from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(422).json({ message: 'User already exists' });
      return;
    }
    if(req.body.password.trim().length < 6) {
      res.status(422).json({ message: 'Password must be at least 6 characters' });
      return;
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong username or password!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password && 
      res.status(401).json("Wrong password!");
    
      const accessToken = jwt.sign({
        id: user._id, isAdmin: user.isAdmin
      }, process.env.SECRET_KEY, { expiresIn: "5d" });

    const { password, ...othersInfo } = user._doc;
    res.status(200).json({...othersInfo, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
}
