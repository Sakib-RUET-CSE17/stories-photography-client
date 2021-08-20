
import axios from 'axios';
import Sidebar from 'components/common/Sidebar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductService from 'services/ProductService';
import { IProduct } from 'types';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState<string>('')
    const [uploadProgress, setUploadProgress] = useState<{ progress: number; bg: string; }>({ progress: 100, bg: 'light' })

    const handleProgress = (progress: number, bg: string) => {
        const newProgress = { ...uploadProgress }
        newProgress.progress = progress
        newProgress.bg = bg
        setUploadProgress(newProgress)
    }

    const onSubmit = (data: { title: string; description: string; price: string; }, e: any) => {
        const productData: IProduct = {
            title: data.title,
            description: data.description,
            price: parseInt(data.price),
            image: imageURL
        }
        // console.log(productData)
        if (imageURL !== '') {
            ProductService.addProduct(productData)
                .then(res => {
                    if (res) {
                        alert('Added Successfully');
                        e.target.reset()
                    } else {
                        alert('Something Wrong!');
                    }
                })
        }
        else {
            alert('Image Upload Failed!');
        }
        handleProgress(100, 'light')
    }

    const handleImageUpload = (event: any) => {
        handleProgress(50, 'light')
        const imageData = new FormData()
        imageData.set('key', '65a2dd24ccada45d6cf50c5d7162b3a5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                handleProgress(100, 'info')
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return (
        <>
            <Sidebar />

            <div style={{ position: 'absolute', left: '94px', right: '0' }} className="text-center">
                <h1>Add Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder='Service Title(Ex: Basic Package)' {...register("title")} />
                    <br />
                    <input className="form-control" placeholder='Description' {...register("description")} />
                    <br />
                    <input className="form-control" placeholder='Price in BDT(Ex: 9000)' {...register("price")} />
                    <br />

                    <div className="progress h-100">

                        {/* <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${uploadProgress}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> */}
                        <input className={`form-control progress-bar progress-bar-striped progress-bar-animated bg-${uploadProgress.bg}`} style={{ width: `${uploadProgress.progress}%` }} role="progressbar" type='file' onChange={handleImageUpload} />

                    </div>
                    <br />
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </ >
    );
};

export default AddProduct;