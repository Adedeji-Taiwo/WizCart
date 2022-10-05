import React, {useEffect, useRef} from 'react';
import AdminSideBar from '../../../../components/adminSideBar/AdminSideBar'
import {  BiEditAlt } from 'react-icons/bi';
import {toast} from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { getCategory, updateCategory } from '../../../../services/category';
import {
    CategoryWrapper,
    Section,
    Form,
  } from './style';


const CategoryUpdate = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();
    const {loading} = useSelector(state => state.updateCategory);
    const {userInfo} = useSelector(state => state.userLogin);


    let { slug } = useParams(); 
    
    useEffect(() => {
      loadCategory();
    }, []);

 
   const loadCategory = () => {
        getCategory(slug).then((res) => {
            inputRef.current.value = res.data.name;
        })
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        let categoryToUpdate = e.target.category.value;
        
        dispatch({type: "UPDATE_CATEGORY_REQUEST", payload: categoryToUpdate});

        if(!categoryToUpdate) {
            toast.error(t('New update is required'));
            setTimeout(() =>  dispatch({type: "UPDATE_CATEGORY_FAIL"}), 6000);
            return;
        }

        if (categoryToUpdate.length < 2) {
            toast.error(t('New update must be at least 6 characters long'));
            setTimeout(() =>  dispatch({type: "UPDATE_CATEGORY_FAIL",  payload: categoryToUpdate}), 6000);
            return;
        }

        updateCategory(slug, { name: `${categoryToUpdate[0].toUpperCase()}${categoryToUpdate.slice(1)}` }, userInfo.token)
            .then((res) => {
                dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: categoryToUpdate });
                toast.success(`${res.data.name} is updated`);
                e.target.category.value = '';
                navigate("/admin/category");
            })
            .catch((error) => {
                setTimeout(() =>  dispatch({type: "UPDATE_CATEGORY_FAIL", payload: categoryToUpdate}), 6000);
                if (error.response.status === 400) {
                toast.error(error.response.data);
                }
            });        
    }
 

  return (
    <>
    <AdminSideBar />
    <CategoryWrapper>
    <Section>
        <Form onSubmit={handleSubmit} fadeText={loading}>
            <h3>{t('Update category')}</h3>
          <div>
            <span>< BiEditAlt /></span>
            <input 
                type="text"
                name="category" 
                placeholder={`${t("Update category")}...`}
                autoFocus
                ref={inputRef}
            />
          </div>

          <div>
            <input type="submit" name="updateCategory" value={t("Update")} id="submit" />
            {loading && (<span className='spinner'>
                <Oval
                    height={25}
                    width={25}
                    color='hsl(0, 0%, 83%)'
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#fff"
                    strokeWidth={7}
                    strokeWidthSecondary={7}
                    />
            </span>)}
          </div>
        </Form>
    </Section>
    </CategoryWrapper>
    </>
  )
}

export default CategoryUpdate;



