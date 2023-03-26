import React, { useContext, useState } from 'react';
import './NewMovie.css';
import { Navbar, Sidebar } from '../index';
import storage from '../../firebase';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';
import { createMovie } from '../../Context/MovieContext/ApiCalls';
import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { toast, ToastContainer } from 'react-toastify';

export const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(MovieContext);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          console.log('Upload is ' + progress + '% done.');
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return {
                ...prev,
                [item.label]: url,
              };
            });
            setUploaded((prev) => prev + 1);
            console.log('File available at', url);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: 'img' },
      { file: imgTitle, label: 'imgTitle' },
      { file: imgSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    toast('Movie Created Successfully', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    });
  };

  console.log(movie);
  console.log({ uploaded });

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="newMovie">
          <h1 className="addProductTitle">New Movie</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Title Image</label>
              <input
                type="file"
                id="imgTitle"
                onChange={(e) => setImgTitle(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Thumbnail Image</label>
              <input
                type="file"
                id="imgSm"
                onChange={(e) => setImgSm(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Top Gun Mavrick"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Year</label>
              <input
                type="text"
                placeholder="2022"
                name="year"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Limit</label>
              <input
                type="text"
                placeholder="2"
                name="limit"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="Action"
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Duration</label>
              <input
                type="text"
                placeholder="Duration"
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Is Series?</label>
              <select id="isSeries" name="isSeries" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <textarea
                placeholder="Best Action Movies in 2022"
                rows={5}
                cols={7}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="addProductItem">
              <label>Trailer</label>
              <input
                type="file"
                name="trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Video</label>
              <input
                type="file"
                name="video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            {uploaded === 5 ? (
              <button className="addProductButton" onClick={handleSubmit}>
                Create
              </button>
            ) : (
              <button className="addProductButton" onClick={handleUpload}>
                Upload
              </button>
            )}
            {uploaded > 0 ? (
              <label>Uploading: {progress} % done</label>
            ) : (
              <label></label>
            )}

            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};
